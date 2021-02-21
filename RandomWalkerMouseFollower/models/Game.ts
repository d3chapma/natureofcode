import Walker from "./Walker.js";

export default class Game {
  walker: Walker;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mouseX: number;
  mouseY: number;

  constructor() {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.walker = new Walker(this.canvas.width, this.canvas.height);
    this.ctx = this.canvas.getContext("2d");
    this.mouseX = 0;
    this.mouseY = 0;

    document.addEventListener("mousemove", (event) => {
      this.mouseX = event.clientX - this.canvas.offsetLeft;
      this.mouseY = event.clientY - this.canvas.offsetTop;
    });
  }

  draw() {
    this.walker.step({ mouseX: this.mouseX, mouseY: this.mouseY });
    this.walker.display(this.ctx);
  }
}
