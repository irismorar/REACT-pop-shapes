import { useCallback, useEffect, useRef, useState } from "react";
import { createShape } from "./createShape";

export function useShapes() {
  const [shapes, setShapes] = useState([]);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const removeShape = useCallback(
    (id) => {
      if (isPaused) {
        return;
      }
      setShapes((shapes) => {
        return shapes.filter((shape) => shape.id !== id);
      });
    },
    [isPaused],
  );

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setShapes((shapes) => {
          return [...shapes, createShape()];
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handleKeyUp = useCallback((event) => {
    if (event.code === "KeyP") {
      setIsPaused((prevState) => !prevState);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);

  return [shapes, removeShape, isPaused];
}
