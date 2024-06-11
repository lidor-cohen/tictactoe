const Gameboard = (() => {
  this.gameboard = ["", "", "", "", "", "", "", "", ""];

  this.init = () => {
    this.cacheDom();
    this.render();
  };

  this.cacheDom = () => {
    this.boardWrapper = document.querySelector(".board-wrapper");
    this.boardItems = document.querySelectorAll(".cell");
  };

  this.render = () => {
    boardItems.forEach((data, index) => {
      data.textContent = gameboard[index];
    });
  };

  return { init };
})();

const GameController = (() => {
  this.turn = 1;

  this.player1 = {
    sign: "O",
  };
  this.player2 = {
    sign: "X",
  };

  this.changeTurn = () => {
    if (turn === 1) {
      turn = 2;
    } else {
      turn = 1;
    }

    return { changeTurn };
  };
})();

Gameboard.init();
