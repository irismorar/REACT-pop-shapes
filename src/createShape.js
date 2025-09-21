const shapeTypes = ["circle", "square"];

export function createShape() {
  return {
    id: crypto.randomUUID(),
    shapeType: getRandomShapeType(),
    x: Math.random() * (window.innerWidth - 40),
    y: Math.random() * (window.innerHeight - 40),
  };
}

function getRandomShapeType() {
  return shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
}
