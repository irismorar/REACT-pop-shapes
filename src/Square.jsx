export function Square({ x, y, onShapeClick }) {
  return (
    <div
      className="square"
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={onShapeClick}
    ></div>
  );
}
