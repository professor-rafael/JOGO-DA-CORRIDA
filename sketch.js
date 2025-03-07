function setup() {
  createCanvas(400, 600);
}

let xJogador1 = 0;
let xJogador2 = 0;


function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#1C0312");
  } else {
    background("rgb(20,1,1)");
    
  }
}

function desenhaJogadores() {
  textSize(40);
  text("😎", xJogador1, 100);
  text("❤️", xJogador2, 200);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 600);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 2 venceu!", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "b") {
    xJogador2 += random(20);
  }
}

