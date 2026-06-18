import { useState } from "react";
import { createPortal } from "react-dom";
import "./styles/Work.css";
import { MdArrowOutward, MdClose } from "react-icons/md";
import CaseStudyModal, { CaseStudy } from "./CaseStudyModal";

const projects: Array<{
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  poster?: string;
  externalLink?: string;
  caseStudy: CaseStudy;
}> = [
  {
    title: "AVL BESS Consulting",
    category: "Second-Life Battery Storage Strategy",
    tools: "LFP vs NMC · G99/G100 · go-to-market roadmap · competitor benchmarking · board presentation",
    image: "/images/bess.png",
    link: "/AVL_BESS.pdf",
    caseStudy: {
      title: "AVL BESS Consulting",
      category: "Second-Life Battery Storage Strategy",
      summary: "Graduate consulting engagement with AVL Powertrain UK assessing the techno-economic feasibility of modular second-life LFP battery energy storage for the UK grid. Led a five-person team as Project Manager across a 57-slide board-level deliverable.",
      challenge: "The UK has ~4.5 GW of battery storage but needs 23–27 GW by 2030 to hit net-zero targets. Meanwhile, 1.5 million EVs are on UK roads, and batteries sold since 2020 will begin reaching end-of-life by 2030 at 70–80% remaining capacity. AVL had no BESS experience but strong automotive relationships and simulation capability. The question: could second-life EV batteries form a viable grid storage product, and how should AVL enter the market without owning battery assets?",
      approach: "Led the engagement end-to-end as Project Manager. Built a multi-level strategy (corporate, business, operational) positioning AVL as a service-led integrator across Consultancy, EPC, and O&M. Modelled battery-return volumes across four scenarios for the UK, EU, and China (using 2020–2024 EV sales data with 8-year lifespan assumptions). Designed a reference BESS system: a 500 kW / 750 kWh containerised unit using mixed second-life LFP packs (Wuling, GAC, BYD) on an LS-HiPPP architecture. Benchmarked competitors (Connected Energy, ALLYE, Zenobe, TagEnergy) and mapped UK regulatory requirements (G99/G100, UN38.3/UKCA, EU 2023/1542 Battery Regulation). Conducted SWOT analyses on Tesla and BYD battery supply chains for UK sourcing.",
      outcome: "Delivered a 3-phase UK go-to-market roadmap (Pilot, Scale, Licensing) with flexible revenue streams across design fees, advisory, testing, O&M contracts, and recycling coordination. Projected 33–65 utility-scale or 325–650 C&I systems deployable from UK Tesla LFP returns alone by 2030. Recommended AVL enter lean and service-first, with low capital exposure and a clear exit path if the market underperforms. Presented to AVL sponsors in a 20-minute board-style session. Received strong feedback.",
      tags: ["LFP", "BESS", "LS-HiPPP", "G99/G100", "Battery return forecasting", "Go-to-market", "SWOT", "Competitor analysis"],
      link: "/AVL_BESS.pdf",
    },
  },
  {
    title: "AVL PHEV Simulation",
    category: "Plug-in Hybrid Feasibility Study",
    tools: "AVL CRUISE M · Mazda CX-5 P0+P4 · 76.5 km EV range · 34% CO₂ reduction · LCA",
    image: "/images/phev-simulation.png",
    link: "/AVL_PHEV.pdf",
    poster: "/images/phev-poster.jpeg",
    caseStudy: {
      title: "AVL PHEV Simulation",
      category: "Plug-in Hybrid Feasibility Study",
      summary: "Full-vehicle powertrain modelling of a P0+P4 plug-in hybrid conversion of the Mazda CX-5, including a complete life-cycle assessment and sustainability benchmarking.",
      challenge: "Evaluate whether a P0+P4 hybrid architecture could deliver meaningful real-world efficiency and emissions gains over a conventional Mazda CX-5, using only simulation tools before any hardware was built.",
      approach: "Built and calibrated a full-vehicle model in AVL CRUISE M with a dual-motor hybrid control strategy. Implemented geofencing logic to prioritise EV-only operation in urban zones. Validated the ICE baseline and hybrid model against WLTP and custom ULEZ drive cycles. Performed a full Life-Cycle Assessment (LCA) to ISO 14040/44, including cradle-to-grave CO₂ and a grid sensitivity study.",
      outcome: "Simulated electric range of 76.5 km, fuel consumption of 1.99 L/100 km, and a 34% CO₂ reduction over 124,000 km compared to the ICE baseline. LCA showed 60% improvement in overall environmental impact. Break-even point reached at 27,483 km under current UK grid conditions.",
      tags: ["AVL CRUISE M", "PHEV", "WLTP", "LCA", "CO₂ modelling", "Hybrid control"],
    },
  },
  {
    title: "Fuse.AE Battery Pack",
    category: "Immersion-Cooled EV Battery Design",
    tools: "ANSYS · COMSOL · DFMEA · DFMA · Bajaj Pulsar EV conversion · 44–48°C Gulf conditions",
    image: "/images/fuse-battery.jpg",
    link: "/Fuse_Battery.pdf",
    caseStudy: {
      title: "Fuse.AE Battery Pack",
      category: "Immersion-Cooled EV Battery Design",
      summary: "Led a multidisciplinary team to design and validate an immersion-cooled battery pack for a Bajaj Pulsar EV conversion, optimised for high-temperature Gulf operating conditions.",
      challenge: "Design a battery thermal management system capable of maintaining safe cell temperatures under Gulf duty cycles, where ambient temperatures routinely exceed 40°C — within the compact chassis constraints of a delivery motorcycle.",
      approach: "Led the end-to-end design from concept through validation. Designed the cooling architecture in Autodesk Inventor, ran thermal and structural simulations in ANSYS and COMSOL, and applied DFMEA to identify and mitigate critical failure modes. Used DFMA principles to simplify assembly and enable scalability. Built an MPS and BOM for cost modelling and developed a commercial viability plan.",
      outcome: "Maintained cell temperatures at 44–48°C under Gulf duty cycles, within the target operating window. Delivered a validated, manufacturable system and a commercial viability plan that positioned Fuse UAE to explore the UAE EV-swapping market for delivery bikes.",
      tags: ["ANSYS", "COMSOL", "DFMEA", "DFMA", "Thermal management", "BOM/MPS"],
    },
  },
  {
    title: "Tesla UNBX Strategy",
    category: "Strategic Market Analysis",
    tools: "Porter's Five Forces · competitor benchmarking · BYD · VW · go-to-market",
    image: "/images/tesla-unbx.webp",
    link: "/Tesla_UNBX.pdf",
    caseStudy: {
      title: "Tesla UNBX Strategy",
      category: "Strategic Market Analysis",
      summary: "In-depth strategic analysis of Tesla's shift to the UNBX (Unboxed Manufacturing) platform and its implications for global EV market positioning.",
      challenge: "Assess how Tesla's UNBX platform changes its competitive position across luxury, mid-range, and budget EV segments, and what threats that creates or removes from incumbent and emerging rivals.",
      approach: "Applied Porter's Five Forces to map competitive dynamics across segments. Benchmarked pricing against BYD, Volkswagen, Stellantis, and Chinese EV entrants. Analysed global demand shifts in Europe and China's sub-$30K EV segment. Evaluated Tesla's dual-market strategy: affordable Model C (~$25K) alongside continued UNBX integration in premium lines.",
      outcome: "Produced a competitor threat matrix and go-to-market positioning assessment identifying where UNBX creates cost leadership advantages and where brand erosion risks emerge. Delivered as a structured business presentation.",
      tags: ["Porter's Five Forces", "Market segmentation", "Competitor benchmarking", "EV strategy", "BYD", "VW"],
    },
  },
  {
    title: "Project ReV8 — Dodge",
    category: "Project & Change Management",
    tools: "Project charter · WBS · Kotter 8-step · Lewin model · stakeholder mapping · risk register",
    image: "/images/dodge-rev8.webp",
    link: "#",
    caseStudy: {
      title: "Project ReV8 — Dodge",
      category: "Project & Change Management",
      summary: "Structured project and change management study for Dodge's reintegration of HEMI V8 powertrains into the Charger lineup under the STLA Large platform, following the discontinuation of the Charger Daytona R/T EV.",
      challenge: "Stellantis's EV-only strategy had diluted Dodge's performance brand identity, resulting in weak Charger Daytona sales and growing internal and consumer dissatisfaction. With CEO Tavares gone and US policy rolling back EV incentives, the case for reintroducing ICE variants needed a structured delivery and change framework — not just a product decision.",
      approach: "Developed a full project charter for Project ReV8 covering scope, SMART objectives, stakeholder roles, risk register, and stage-gate approval criteria. Applied Kotter's 8-Step Change Model for execution planning and Lewin's Three-Phase Model for cultural alignment. Mapped resistance sources across internal strategy, compliance, manufacturing, and dealer teams, with tailored mitigation strategies drawn from Kotter and Schlesinger's frameworks.",
      outcome: "Delivered a dual-path propulsion strategy targeting >30% ICE sales mix within 12 months of launch, Tier 4 emissions compliance by Q3 2026, and a projected gross profit of £1.1–1.4 billion over 5 years. Critique identified gaps in contingency planning and RACI clarity, with recommendations for strengthening readiness indicators.",
      tags: ["Project charter", "WBS", "Kotter 8-step", "Lewin model", "Stakeholder mapping", "Risk register", "Change management"],
    },
  },
  {
    title: "Autonomous Perception",
    category: "Published Research · YOLOv5",
    tools: "YOLO · CARLA simulator · UAE-specific dataset · Quanser QCar validation",
    image: "/images/autonomous-perception.jpeg",
    link: "/Autonomous_Perception.pdf",
    externalLink: "https://ieeexplore.ieee.org/document/10851660",
    caseStudy: {
      title: "Autonomous Perception",
      category: "Published Research · YOLOv5 · IEEE",
      summary: "Engineered a real-time object detection system for autonomous vehicles, trained and validated for UAE driving conditions. Published research in IEEE Xplore.",
      challenge: "Standard AV perception datasets are dominated by Western road conditions. UAE roads present unique challenges: different signage, extreme lighting, dust, and heat haze. Existing models underperformed on these inputs.",
      approach: "Developed a UAE-specific dataset incorporating regional driving scenarios, signage, and road layouts. Trained and optimised YOLOv5 variants, benchmarking accuracy and latency across diverse lighting and weather conditions in the CARLA simulator. Conducted real-world validation using a Quanser QCar on a UAE-simulated track.",
      outcome: "Improved object detection accuracy for local traffic elements critical for urban AV navigation in high-traffic, high-temperature conditions. Results validated on both simulated and physical hardware. Published in IEEE Xplore.",
      tags: ["YOLOv5", "CARLA", "Quanser QCar", "Custom dataset", "Real-time detection", "IEEE"],
    },
  },
  {
    title: "BEV Simulation — Dubai",
    category: "Battery Electric Vehicle Modelling",
    tools: "MATLAB/Simulink · Tesla Model 3 · custom Dubai drive cycle · 0.149 kWh/km",
    image: "/images/bev-simulation.jpg",
    link: "#",
    caseStudy: {
      title: "BEV Simulation — Dubai",
      category: "Battery Electric Vehicle Modelling",
      summary: "Custom MATLAB/Simulink BEV model built for Dubai's urban driving conditions, with real-world validation against Tesla Model 3 published data.",
      challenge: "Existing BEV simulations use European or US drive cycles that do not reflect Dubai's stop-and-go traffic patterns, high ambient temperatures (35–45°C), and the resulting battery degradation and cooling load.",
      approach: "Designed a custom drive cycle covering Al Barsha to Al Satwa, incorporating varying traffic densities, stop-go patterns, and road types. Built a full BEV model in MATLAB/Simulink integrating drivetrain, battery, and glider subsystems with configurable vehicle parameters. Assessed performance at 35°C and 45°C ambient, focusing on battery degradation, energy consumption, and regenerative braking.",
      outcome: "Achieved energy efficiency of 0.149 kWh/km, closely matching Tesla's published value of 0.151 kWh/km. Demonstrated the model's utility for regional EV deployment planning and policy in hot-weather urban environments.",
      tags: ["MATLAB/Simulink", "Drive cycle", "Battery modelling", "Tesla Model 3", "Dubai", "Regen braking"],
    },
  },
  {
    title: "EV Conversion Kit",
    category: "Universal Classic Vehicle Retrofit",
    tools: "Tesla Model 3 drive unit · custom subframe · 1969 Mustang · Fuse UAE",
    image: "/images/ev-conversion.jpeg",
    link: "#",
    caseStudy: {
      title: "EV Conversion Kit",
      category: "Universal Classic Vehicle Retrofit",
      summary: "Led the electrical engineering team on a universal EV conversion kit, using a 1969 Mustang Hardtop as the case study to demonstrate cross-platform feasibility.",
      challenge: "Design an EV retrofit system that can be adapted across different classic vehicle chassis while preserving original aesthetics — without a vehicle-specific bespoke design for each platform.",
      approach: "Led electrical team design and integration: inverters, rectifiers, battery packs, and DC-DC converters selected for cross-platform compatibility. Designed a custom subframe to mount a Tesla Model 3 drive unit into the Mustang chassis. Coordinated across design, prototyping, and validation phases in collaboration with the Fuse UAE team and their CEO.",
      outcome: "Demonstrated practical feasibility of a universal EV retrofit kit for classic vehicles, balancing heritage preservation with electrification. Strengthened industry-academic ties and expanded understanding of commercial and technical challenges in EV conversions.",
      tags: ["EV conversion", "Tesla Model 3", "Custom subframe", "Inverters", "DC-DC converter", "Classic cars"],
    },
  },
];

const Work = () => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const [activePdf, setActivePdf] = useState<string | null>(null);
  const [activePoster, setActivePoster] = useState<string | null>(null);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>My <span>Work</span></h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-number">0{index + 1}</div>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-external"
                    data-cursor="disable"
                  >
                    <MdArrowOutward />
                  </a>
                )}
              </div>
              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h4>{project.title}</h4>
                <p className="project-tools">{project.tools}</p>
                <div className="project-actions">
                  <button
                    className="case-study-btn"
                    onClick={() => setActiveStudy(project.caseStudy)}
                    data-cursor="disable"
                  >
                    Case Study →
                  </button>
                  {project.link && project.link !== "#" && (
                    <button
                      className="case-study-btn case-study-btn-link"
                      onClick={() => setActivePdf(project.link)}
                      data-cursor="disable"
                    >
                      View Presentation →
                    </button>
                  )}
                  {project.poster && (
                    <button
                      className="case-study-btn case-study-btn-link"
                      onClick={() => setActivePoster(project.poster!)}
                      data-cursor="disable"
                    >
                      View Poster →
                    </button>
                  )}
                  {project.externalLink && (
                    <a
                      className="case-study-btn case-study-btn-link"
                      href={project.externalLink}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="disable"
                    >
                      Published Paper ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />

      {activePdf && createPortal(
        <div className="pdf-viewer-backdrop" onClick={() => setActivePdf(null)}>
          <div className="pdf-viewer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-viewer-header">
              <span>Presentation</span>
              <button className="pdf-viewer-close" onClick={() => setActivePdf(null)} data-cursor="disable">
                <MdClose />
              </button>
            </div>
            <iframe src={activePdf} className="pdf-viewer-frame" title="PDF Viewer" />
          </div>
        </div>,
        document.body
      )}

      {activePoster && createPortal(
        <div className="pdf-viewer-backdrop" onClick={() => setActivePoster(null)}>
          <div className="poster-viewer-panel" onClick={(e) => e.stopPropagation()}>
            <button className="pdf-viewer-close poster-close" onClick={() => setActivePoster(null)} data-cursor="disable">
              <MdClose />
            </button>
            <img src={activePoster} alt="Project poster" className="poster-viewer-img" />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Work;
