export function Circle({ id, x, y, onRemoveCircle }) {
  return (
    <div
      className="circle"
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={() => {
        onRemoveCircle(id);
      }}
    ></div>
  );
}
