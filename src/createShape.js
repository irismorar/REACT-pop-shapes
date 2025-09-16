export function createShape() {
  return {
    id: crypto.randomUUID(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  };
}
