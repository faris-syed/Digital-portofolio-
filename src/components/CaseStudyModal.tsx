import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose, MdArrowOutward } from "react-icons/md";
import "./styles/CaseStudyModal.css";

export type CaseStudy = {
  title: string;
  category: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  link?: string;
};

type Props = {
  study: CaseStudy | null;
  onClose: () => void;
};

const CaseStudyModal = ({ study, onClose }: Props) => {
  useEffect(() => {
    if (!study) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [study, onClose]);

  if (!study) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} data-cursor="disable">
          <MdClose />
        </button>

        <div className="modal-header">
          <p className="modal-category">{study.category}</p>
          <h2>{study.title}</h2>
          <p className="modal-summary">{study.summary}</p>
        </div>

        <div className="modal-body">
          <div className="modal-block">
            <h4>Challenge</h4>
            <p>{study.challenge}</p>
          </div>
          <div className="modal-block">
            <h4>Approach</h4>
            <p>{study.approach}</p>
          </div>
          <div className="modal-block">
            <h4>Outcome</h4>
            <p>{study.outcome}</p>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-tags">
            {study.tags.map((t) => <span key={t} className="modal-tag">{t}</span>)}
          </div>
          {study.link && study.link !== "#" && (
            <a href={study.link} target="_blank" rel="noreferrer" className="modal-link" data-cursor="disable">
              View project <MdArrowOutward />
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CaseStudyModal;
