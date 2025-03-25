import "./StatsCount.css";

export default function StatsCount({ statName , statCount }) {
  return (
    <div>
      <p className="stats-paragraph">
        <span className="text-primary-color">{statName}</span>
        <span className="text-secondary-color">{statCount}</span>
      </p>
    </div>
  );
}