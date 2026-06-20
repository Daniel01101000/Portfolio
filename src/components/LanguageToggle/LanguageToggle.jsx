import { useLanguage } from '../../hooks/useLanguage';
import './LanguageToggle.css';

function LanguageToggle() {
  const { lang, setLanguage } = useLanguage();

  return (
    <div className="lang-toggle">
      <div className={`lang-indicator ${lang === 'es' ? 'right' : 'left'}`} />
      <button
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
        onClick={() => setLanguage('es')}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}

export default LanguageToggle;
