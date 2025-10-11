import "./App.css";
import { useShapes } from "./useShapes";
import { Circle } from "./Circle";
import { Square } from "./Square";
import { useScore } from "./useScore";
import { PausedAlert } from "./PausedAlert";

export default function App() {
  const [shapes, removeShape, isPaused] = useShapes();
  const { score, increaseScoreBy } = useScore();

  return (
    <>
      {shapes.map((shape) => {
        if (shape.shapeType === "circle") {
          return (
            <Circle
              key={shape.id}
              x={shape.x}
              y={shape.y}
              onShapeClick={() => {
                removeShape(shape.id);
                increaseScoreBy(1);
              }}
            />
          );
        }
        if (shape.shapeType === "square") {
          return (
            <Square
              key={shape.id}
              x={shape.x}
              y={shape.y}
              onShapeClick={() => {
                removeShape(shape.id);
                increaseScoreBy(2);
              }}
            />
          );
        }
      })}
      <section className="score">SCORE: {score}</section>
      {isPaused && <PausedAlert />}
    </>
  );
}
