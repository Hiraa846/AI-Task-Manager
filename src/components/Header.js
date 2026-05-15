export default function Header({ total, done }) {
  return (
    <div className="header">
      <h1 className="header__title">
        My Tasks <span className="header__star">✦</span>
      </h1>
      <div className="header__meta">
        <span className="badge">{total} task{total !== 1 ? "s" : ""}</span>
        <span className="badge">{done} done</span>
      </div>
    </div>
  );
}
