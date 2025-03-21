import "./StatsCount.css";

export default function StatsCount({ statName , statCount }) {
  return (
    <div>
      <p className="stats-paragraph"><span>{statName}</span> <span>{statCount}</span></p>
    </div>
  );
}