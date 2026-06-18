import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://linkedin.com/in/faris-syed-104aa7179"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn: faris-syed
              </a>
            </p>
            <h4>Education</h4>
            <p>
              MSc Automotive Engineering with Business Management (Merit),
              University of Bath, 2024–2025
            </p>
            <p>
              BEng (Hons) Automotive Engineering (2:1), Heriot-Watt University
              Dubai, 2021–2024
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://linkedin.com/in/faris-syed-104aa7179"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built by <br /> <span>Faris Syed</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
