const Gameboard = (() => {
  this.gameboard = ["", "", "", "", "", "", "", "", ""];

  this.init = () => {
    this.cacheDom();
    this.bindEvents();
    this.render();
  };

  this.cacheDom = () => {
    this.boardWrapper = document.querySelector(".board-wrapper");
    this.boardItems = document.querySelectorAll(".cell");
    this.statusText = document.querySelector("#status-text");
  };

  this.bindEvents = () => {
    this.boardItems.forEach((element) => {
      element.addEventListener("click", clickCell, false);
    });
  };

  this.clickCell = (e) => {
    let index = [...boardWrapper.children].indexOf(e.srcElement);
    let sign = GameController.getPlayerTurn().sign;

    e.srcElement.removeEventListener("click", clickCell);

    this.gameboard[index] = sign;
    GameController.changeTurn();
    this.render();
  };

  this.render = () => {
    boardItems.forEach((data, index) => {
      data.textContent = gameboard[index];
    });

    statusText.textContent = `${GameController.getPlayerTurn().sign}'s Turn`;
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
      return this.player2;
    } else {
      turn = 1;
      return this.player1;
    }
  };

  this.getPlayerTurn = () => {
    if (turn === 1) {
      return this.player1;
    } else {
      return this.player2;
    }
  };

  return { changeTurn, getPlayerTurn };
})();

Gameboard.init();
