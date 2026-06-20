import { useState, useCallback, useRef, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

const CACHE_PREFIX = 'i18n_';
const LANG_KEY = 'i18n_lang';

const OVERRIDES = {
  es: {
    'About Me': 'Sobre Mi',
    'About me': 'Sobre Mi',
    'Portfolio': 'Proyectos',
  },
};

function hashKey(text, lang) {
  return CACHE_PREFIX + lang + '_' + text;
}

function loadCacheFromStorage() {
  const cache = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(CACHE_PREFIX) && key !== LANG_KEY) {
        cache[key] = localStorage.getItem(key);
      }
    }
  } catch {
    // localStorage unavailable
  }
  return cache;
}

async function callMyMemory(text, targetLang) {
  const params = new URLSearchParams({
    q: text.length > 500 ? text.slice(0, 500) : text,
    langpair: `en|${targetLang}`,
  });

  const res = await fetch(`https://api.mymemory.translated.net/get?${params}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();

  if (data.responseStatus === 200 && data.responseData?.translatedText) {
    return data.responseData.translatedText;
  }
  throw new Error('Bad response');
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem(LANG_KEY) || 'en');
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cacheRef = useRef(loadCacheFromStorage());
  const registeredRef = useRef(new Set());

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const translateAll = useCallback(async (texts, targetLang) => {
    if (targetLang === 'en') {
      const map = {};
      texts.forEach((t) => { map[t] = t; });
      return map;
    }

    const map = {};
    const uncached = [];

    texts.forEach((text) => {
      const key = hashKey(text, targetLang);
      if (cacheRef.current[key]) {
        map[text] = cacheRef.current[key];
      } else {
        uncached.push(text);
      }
    });

    const results = await Promise.allSettled(
      uncached.map(async (text) => {
        const translated = await callMyMemory(text, targetLang);
        const key = hashKey(text, targetLang);
        cacheRef.current[key] = translated;
        try { localStorage.setItem(key, translated); } catch { /* ignore */ }
        return { original: text, translated };
      })
    );

    results.forEach((r, i) => {
      if (r.status === 'fulfilled') {
        map[r.value.original] = r.value.translated;
      } else {
        map[uncached[i]] = uncached[i];
      }
    });

    return map;
  }, []);

  const register = useCallback((text) => {
    if (text && typeof text === 'string' && text.trim()) {
      registeredRef.current.add(text);
    }
  }, []);

  const changeLanguage = useCallback(async (newLang) => {
    if (newLang === lang) return;
    setLang(newLang);
    setLoading(true);
    setError(null);
    try {
      const texts = Array.from(registeredRef.current);
      const map = await translateAll(texts, newLang);
      setTranslations(map);
    } catch (err) {
      setError('Translation service unavailable');
      console.error('Translation error:', err);
    } finally {
      setLoading(false);
    }
  }, [lang, translateAll]);

  useEffect(() => {
    if (lang !== 'en' && registeredRef.current.size > 0) {
      setLoading(true);
      const texts = Array.from(registeredRef.current);
      translateAll(texts, lang)
        .then((map) => setTranslations(map))
        .catch(() => setError('Translation service unavailable'))
        .finally(() => setLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = useCallback((text) => {
    register(text);
    if (lang === 'en') return text;
    const override = OVERRIDES[lang]?.[text];
    if (override) return override;
    return translations[text] || text;
  }, [lang, translations, register]);

  return (
    <LanguageContext.Provider value={{ lang, setLanguage: changeLanguage, t, loading, error }}>
      {children}
      {loading && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.25)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff', padding: '24px 36px', borderRadius: '12px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}>
            <div style={{
              width: 36, height: 36, border: '3px solid #e5e7eb',
              borderTop: '3px solid #8b5cf6', borderRadius: '50%',
              animation: 'i18n-spin 0.8s linear infinite',
            }} />
            <span style={{ color: '#374151', fontSize: 14, fontWeight: 500 }}>
              Translating...
            </span>
          </div>
          <style>{`@keyframes i18n-spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}
    </LanguageContext.Provider>
  );
}
