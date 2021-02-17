import Game from "./models/Game.js";

const game = new Game();

function loop(timestamp: number) {
  const progress = timestamp - lastRender;

  game.draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

let lastRender = 0;
window.requestAnimationFrame(loop);
