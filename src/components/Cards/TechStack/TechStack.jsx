import './TechStack.css'

function TechStack({ technologies }) {
  return (
    <div className="tech-stack">
      {technologies.map((tech, index) => (
        <span key={index} className={`tech ${tech.toLowerCase()}`}>
          {tech}
        </span>
      ))}
    </div>
  );
}

export default TechStack;