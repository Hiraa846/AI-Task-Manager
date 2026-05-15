const FILTERS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "done", label: "Completed" },
];

export default function FilterBar({ current, onChange }) {
  return (
    <div className="filters">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          className={`filter-btn${current === key ? " filter-btn--active" : ""}`}
          onClick={() => onChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
