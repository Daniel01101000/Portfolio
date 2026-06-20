import './Hero.css'
import MyUser from "../../assets/MyUser/MyUser.png";

function Hero() {
  return (
    <section id="about" className="hero">

      <div className="hero-left"></div>

      <div className="hero-right">

        {/* 🔥 NUEVO CONTENEDOR */}
        <div className="about-container"> 
  <h1 className="about-title">About Me</h1>

  <div className="about-text">
    <p>
      Junior Full-Stack Developer specialized in <strong>React, JavaScript, and Node.js</strong>.
    </p>

    <p>
      I build scalable, user-focused web applications with clean architecture, REST API integration, state management, and SQL databases.
    </p>

    <p>
      Although I haven’t yet worked in a professional company, I have developed multiple real-world projects to strengthen my practical experience and prepare for industry-level challenges.
    </p>

    <p className="about-highlight">
      Passionate about solving complex problems through logical thinking and continuous improvement.
    </p>

    <h2>Why I built these projects</h2>

    <p>
      I built these projects to understand what it feels like to work on large-scale applications while studying. My goal was to simulate real development environments and gain hands-on experience that would give me a competitive advantage when entering the professional workforce.
    </p>
  </div>
</div>

      </div>

      <div className="divider"></div>
      <a 
        href="https://www.linkedin.com/in/juan-daniel-charles-muro-1777013b2/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
          <div className="profile-circle">
            <img src={MyUser} alt="Juan Daniel Charles Muro" />
          </div>
      </a>

    </section>
  )
}

export default Hero