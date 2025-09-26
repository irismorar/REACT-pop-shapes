import { useState } from "react";

export function useScore() {
  const [score, setScore] = useState(0);

  function increaseScoreBy(value) {
    setScore((oldScore) => {
      return oldScore + value;
    });
  }

  return { score, increaseScoreBy };
}
