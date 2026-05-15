export default function Footer({ activeCount, onClearDone, hasDone }) {
  return (
    <div className="footer-bar">
      <span className="footer-text">
        {activeCount} item{activeCount !== 1 ? "s" : ""} left
      </span>
      {hasDone && (
        <button className="clear-btn" onClick={onClearDone}>
          Clear completed
        </button>
      )}
    </div>
  );
}
