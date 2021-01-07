/* One of TypeScript’s core principles is that type checking focuses on the
 * shape that values have. This is sometimes called “duck typing” or
 * “structural subtyping”. In TypeScript, interfaces fill the role of
 * naming these types, and are a powerful way of defining contracts within
 * your code as well as contracts with code outside of your project.
 */

// Basic example
interface LabeledValue {
  label: string;
}

export function printLabel(labeledObj: LabeledValue): void {
  console.log(labeledObj.label);
}

// Optional properties
interface SquareConfig {
  color?: string;
  width?: number;
}

export function createSquare(
  config: SquareConfig
): { color: string; area: number } {
  const newSquare = { color: 'White', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}