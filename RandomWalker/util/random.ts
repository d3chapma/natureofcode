export function random(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}
