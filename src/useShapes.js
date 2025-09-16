import { useCallback, useEffect, useRef, useState } from "react";
import { createShape } from "./createShape";

export function useShapes() {
  const [shapes, setShapes] = useState([]);
  const intervalRef = useRef(null);

  const removeCircle = useCallback((id) => {
    setShapes((shapes) => {
      return shapes.filter((shape) => shape.id !== id);
    });
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setShapes((shapes) => {
        return [...shapes, createShape()];
      });
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return [shapes, removeCircle];
}
