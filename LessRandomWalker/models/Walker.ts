export default class Walker {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.x = width / 2;
    this.y = height / 2;
  }

  display(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(this.x, this.y, 5, 5);
  }

  step({ mouseX, mouseY }) {
    const random = Math.random();

    if (random <= 0.5) {
      if (mouseX > this.x) this.x += 5;
      if (mouseX < this.x) this.x -= 5;
      if (mouseY > this.y) this.y += 5;
      if (mouseY < this.y) this.y -= 5;
    } else if (random <= 0.655) {
      this.x += 5;
    } else if (random <= 0.75) {
      this.x -= 5;
    } else if (random <= 0.875) {
      this.y += 5;
    } else {
      this.y -= 5;
    }

    if (this.x > this.width) this.x -= this.width;
    if (this.x < 0) this.x += this.width;
    if (this.y > this.height) this.y -= this.height;
    if (this.y < 0) this.y += this.height;
  }
}
