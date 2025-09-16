import "./App.css";
import { useShapes } from "./useShapes";
import { Circle } from "./Circle";

export default function App() {
  const [shapes, removeCircle] = useShapes();

  return (
    <>
      {shapes.map((shape) => {
        return (
          <Circle
            key={shape.id}
            id={shape.id}
            x={shape.x}
            y={shape.y}
            onRemoveCircle={removeCircle}
          />
        );
      })}
    </>
  );
}
