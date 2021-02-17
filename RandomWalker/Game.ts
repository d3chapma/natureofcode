import Walker from "./Walker.js";

export default class Game {
  walker: Walker;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.walker = new Walker(this.canvas.width, this.canvas.height);
    this.ctx = this.canvas.getContext("2d");
  }

  draw() {
    this.walker.step();
    this.walker.display(this.ctx);
  }
}
