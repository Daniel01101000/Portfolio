import Cards from '../../components/Cards/Cards.jsx'
import './Portfolio.css'
import { useLanguage } from '../../hooks/useLanguage.js'

function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="portfolio">
      <h2 className='portfolio-title'>{t("Portfolio")}</h2>
      <Cards />
    </section>
  )
}

export default Portfolio