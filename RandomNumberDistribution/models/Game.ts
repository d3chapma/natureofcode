import { random } from "../utils/random.js";

export default class Game {
  randomCounts: number[];
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() {
    this.randomCounts = new Array(20).fill(0);
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "rgb(175, 175, 175)";
  }

  draw() {
    const index = random(0, 19);
    this.randomCounts[index]++;

    const colWidth = this.canvas.width / this.randomCounts.length;
    for (let x = 0; x < this.randomCounts.length; x++) {
      this.ctx.fillRect(
        x * colWidth,
        this.canvas.height - this.randomCounts[x],
        colWidth - 1,
        this.randomCounts[x]
      );
    }
  }
}
