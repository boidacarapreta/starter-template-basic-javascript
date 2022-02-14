// Importar todas as cenas
import { cena0 } from "./cena0.js";
import { cena1 } from "./cena1.js";
import { cena2 } from "./cena2.js";

// Configuração do jogo
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 100 },
      debug: true
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  scene: [cena0, cena1, cena2],
};

// Criar o objeto principal
const game = new Phaser.Game(config);