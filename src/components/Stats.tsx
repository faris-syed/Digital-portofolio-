import { useEffect, useRef, useState } from "react";
import "./styles/Stats.css";

const stats = [
  { value: 1000, suffix: "+", label: "Vehicles coordinated" },
  { value: 34, suffix: "%", label: "CO₂ reduction (PHEV)" },
  { value: 48, suffix: "°C", label: "Max battery temp held" },
  { value: 7, suffix: "", label: "Industry roles" },
];

const useCountUp = (target: number, duration: number, active: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
};

const StatItem = ({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) => {
  const count = useCountUp(value, 1200, active);
  return (
    <div className="stat-item">
      <span className="stat-value">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const Stats = () => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-strip" ref={ref}>
      {stats.map((s) => (
        <StatItem key={s.label} {...s} active={active} />
      ))}
    </div>
  );
};

export default Stats;
