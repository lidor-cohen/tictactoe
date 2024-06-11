const Gameboard = (() => {
  this.gameboard = [
    ["", "", ""],
    ["", "X", ""],
    ["O", "", ""],
  ];

  this.init = () => {
    this.cacheDom();
    this.render();
  };

  this.cacheDom = () => {
    this.boardWrapper = document.querySelector(".board-wrapper");
  };

  this.render = () => {
    for (let i = 0; i < gameboard.length; i++) {
      for (let j = 0; j < gameboard[i].length; j++) {
        const block = this.gameboard[i][j];

        if (block === "") {
          console.log(" ");
        } else {
          console.log(`${block}`);
        }
      }
    }
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
