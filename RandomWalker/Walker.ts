export default class Walker {
  x: number;
  y: number;

  constructor(width: number, height: number) {
    this.x = width / 2;
    this.y = height / 2;
  }

  display(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(this.x, this.y, 5, 5);
  }

  step() {
    const stepX = Math.random() * 2 - 1;
    const stepY = Math.random() * 2 - 1;

    this.x += stepX * 5;
    this.y += stepY * 5;
  }
}
