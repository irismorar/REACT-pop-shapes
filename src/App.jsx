import "./App.css";
import { useShapes } from "./useShapes";
import { Circle } from "./Circle";
import { Square } from "./Square";

export default function App() {
  const [shapes, removeShape] = useShapes();

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
              }}
            />
          );
        }
      })}
    </>
  );
}
