import "./styles/Skills.css";

const skillCategories = [
  {
    title: "Simulation & CAE",
    skills: ["AVL CRUISE M", "MATLAB / Simulink", "ANSYS", "COMSOL", "CARLA Simulator"],
  },
  {
    title: "Design & CAD",
    skills: ["Autodesk Inventor", "SolidWorks", "DFMEA / DFMA", "MPS / MRP / BOM"],
  },
  {
    title: "Programming & Data",
    skills: ["Python", "YOLOv5", "Telemetry analysis", "MATLAB scripting"],
  },
  {
    title: "Project & Operations",
    skills: ["Project management", "WBS / Gantt", "Kissflow", "Monday.com", "Stakeholder mapping"],
  },
  {
    title: "Business & Strategy",
    skills: ["Feasibility studies", "Market analysis", "Go-to-market strategy", "Porter's Five Forces", "Competitor benchmarking"],
  },
  {
    title: "Hands-on & Diagnostics",
    skills: ["Xentry diagnostics", "Workshop operations", "Pit / race support", "Prototype build & test"],
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-container section-container">
        <h2>
          My <span>Skills</span>
        </h2>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-category" key={i}>
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, j) => (
                  <span className="skill-tag" key={j}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
