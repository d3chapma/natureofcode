const stepSize: number = 5;

export default class Walker {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
    this.x = width / 2;
    this.y = height / 2;
  }

  display(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(this.x, this.y, stepSize, stepSize);
  }

  step({ mouseX, mouseY }) {
    const random = Math.random();

    if (random <= 0.5) {
      if (mouseX > this.x) this.x += stepSize;
      if (mouseX < this.x) this.x -= stepSize;
      if (mouseY > this.y) this.y += stepSize;
      if (mouseY < this.y) this.y -= stepSize;
    } else if (random <= 0.625) {
      this.x += stepSize;
    } else if (random <= 0.75) {
      this.x -= stepSize;
    } else if (random <= 0.875) {
      this.y += stepSize;
    } else {
      this.y -= stepSize;
    }

    if (this.x > this.width) this.x -= this.width;
    if (this.x < 0) this.x += this.width;

    if (this.y > this.height) this.y -= this.height;
    if (this.y < 0) this.y += this.height;
  }
}
