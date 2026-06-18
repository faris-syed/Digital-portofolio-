import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container">
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>MSc Automotive Engineering with Business Management</h4>
                <h5>University of Bath · Bath, UK</h5>
              </div>
              <h3>Sep 2024 – Sep 2025</h3>
            </div>
            <p>
              Merit. Awarded a merit-based scholarship. Graduate consulting
              project with AVL Powertrain UK on second-life battery storage
              feasibility. Plug-in hybrid simulation in AVL CRUISE M with
              full LCA.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>BEng (Hons) Automotive Engineering</h4>
                <h5>Heriot-Watt University · Dubai</h5>
              </div>
              <h3>Sep 2021 – Jul 2024</h3>
            </div>
            <p>
              2:1. Awarded a merit-based scholarship. Published IEEE research
              on autonomous vehicle perception. Led immersion-cooled battery
              pack design for Fuse.AE. Led electrical team on EV conversion
              kit project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
