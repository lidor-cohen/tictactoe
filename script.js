const Gameboard = (() => {
  this.gameboard = ["", "", "", "", "", "", "", "", ""];

  this.init = () => {
    this.gameboard = ["", "", "", "", "", "", "", "", ""];
    this.cacheDom();
    this.modal.close();
    this.bindEvents();
    this.render();
  };

  this.cacheDom = () => {
    this.boardWrapper = document.querySelector(".board-wrapper");
    this.boardItems = document.querySelectorAll(".cell");
    this.statusText = document.querySelector("#status-text");
    this.modal = document.querySelector("#result-modal");
    this.modalResultText = document.querySelector("#winner-text");
    this.resetButtons = document.querySelectorAll(".reset-btn");
  };

  this.bindEvents = () => {
    this.boardItems.forEach((element) => {
      element.addEventListener("click", clickCell, false);
    });

    this.resetButtons.forEach((element) => {
      element.addEventListener("click", init, false);
    });
  };

  this.clickCell = (e) => {
    let index = [...boardWrapper.children].indexOf(e.srcElement);
    let sign = GameController.getPlayerTurn().sign;

    e.srcElement.removeEventListener("click", clickCell);

    this.gameboard[index] = sign;
    GameController.changeTurn();
    this.winnerCheck();
    this.render();
  };

  this.winnerCheck = () => {
    let linearWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    let diagonalWins = [
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winConditions = linearWins.concat(diagonalWins);
    let winChecker = (sign) => {
      for (let i = 0; i < winConditions.length; i++) {
        let flag = true;

        for (let j = 0; j < 3; j++) {
          let gameboardSelector = this.gameboard[winConditions[i][j]];

          if (gameboardSelector !== sign) {
            flag = false;
            break;
          }
        }

        if (flag) {
          modalResultText.textContent = `${sign} is the Winner!`;
          modal.showModal();
        } else if (gameboard.every((cellContent) => cellContent !== "")) {
          modalResultText.textContent = `DRAW!`;
          modal.showModal();
        }
      }
    };

    // CHECK FOR "O" WINNER
    winChecker("O");
    winChecker("X");
  };

  this.displayWinner = () => {};

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
