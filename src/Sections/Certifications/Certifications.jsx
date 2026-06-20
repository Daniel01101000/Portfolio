import "./Certifications.css";
import { useLanguage } from '../../hooks/useLanguage.js';

import certificateImg1 from "../../assets/Certifications/Imgs/FullStack.png";
import certificateImg2 from "../../assets/Certifications/Imgs/Javascript.png";
import certificateImg3 from "../../assets/Certifications/Imgs/JavascriptAsynchronous.png";
import certificateImg4 from "../../assets/Certifications/Imgs/JavascriptFundamentals.png";

import certificatePDF1 from "../../assets/Certifications/PDFS/Full-Stack.pdf";
import certificatePDF2 from "../../assets/Certifications/PDFS/javascript.pdf";
import certificatePDF3 from "../../assets/Certifications/PDFS/JavascriptAsynchronous.pdf";
import certificatePDF4 from "../../assets/Certifications/PDFS/javascriptFundamentals.pdf";

function Certification() {
  const { t } = useLanguage();

  const certificates = [
    {
      img: certificateImg1,
      pdf: certificatePDF1,
      alt: "Full Stack Certificate",
    },
    {
      img: certificateImg2,
      pdf: certificatePDF2,
      alt: "JavaScript Certificate",
    },
    {
      img: certificateImg3,
      pdf: certificatePDF3,
      alt: "JavaScript Asynchronous Certificate",
    },
    {
      img: certificateImg4,
      pdf: certificatePDF4,
      alt: "JavaScript Fundamentals Certificate",
    },
  ];

  return (
    <section id="certifications" className="certification">
      <h2 className="certification-title">{t("Certifications")}</h2>

      {certificates.map((cert, index) => (
        <div key={index} className="certificate-wrapper">
          <div className="certificate-container">
            <img
              src={cert.img}
              alt={cert.alt}
              className="certificate-image"
            />
          </div>

          <div className="certificate-button-container">
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-button"
            >
              {t("View Certificate (PDF)")}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Certification;