export function random(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomGuass(count = 3) {
  let num = 0;
  for (let i = 0; i < count; i++) {
    num += Math.random() * 2;
  }
  return num / count - 1;
}
