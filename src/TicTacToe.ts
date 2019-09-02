export type xAndO = "X" | "O" | "";

export class Game {
  field: Array<xAndO> = ["", "", "", "", "", "", "", "", ""];
  activePlayer: xAndO = "X";
  winner: string = "";

  getField(): Array<xAndO> {
    return this.field;
  }

  getPlayerTurn(): string {
    return this.activePlayer;
  }

  makeMove(n: number): void {
    // if field taken do nothing
    if (this.field[n] !== "" || this.gameResult() !== "") {
      return;
    } else {
      // if field is empty replace by activePlayer
      this.field[n] = this.activePlayer;
      if (this.activePlayer === "X") {
        this.activePlayer = "O";
      } else {
        this.activePlayer = "X";
      }
    }
  }

  getWinner(): string {
    // row
    if (
      this.field[0] === this.field[1] &&
      this.field[1] === this.field[2] &&
      this.field[2] !== ""
    ) {
      return this.field[0];
    }
    if (
      this.field[3] === this.field[4] &&
      this.field[4] === this.field[5] &&
      this.field[4] !== ""
    ) {
      return this.field[3];
    }
    if (
      this.field[6] === this.field[7] &&
      this.field[7] === this.field[8] &&
      this.field[8] !== ""
    ) {
      return this.field[6];
    }

    // column
    if (
      this.field[0] === this.field[3] &&
      this.field[3] === this.field[6] &&
      this.field[6] !== ""
    ) {
      return this.field[0];
    }
    if (
      this.field[1] === this.field[4] &&
      this.field[4] === this.field[7] &&
      this.field[7] !== ""
    ) {
      return this.field[1];
    }
    if (
      this.field[2] === this.field[5] &&
      this.field[5] === this.field[8] &&
      this.field[8] !== ""
    ) {
      return this.field[2];
    }

    // diagonal
    if (
      this.field[0] === this.field[4] &&
      this.field[4] === this.field[8] &&
      this.field[8] !== ""
    ) {
      return this.field[0];
    }
    if (
      this.field[2] === this.field[6] &&
      this.field[6] === this.field[4] &&
      this.field[4] !== ""
    ) {
      return this.field[2];
    }

    // the game is a draw
    if (
      this.field[0] !== "" &&
      this.field[1] !== "" &&
      this.field[2] !== "" &&
      this.field[3] !== "" &&
      this.field[4] !== "" &&
      this.field[5] !== "" &&
      this.field[6] !== "" &&
      this.field[7] !== "" &&
      this.field[8] !== ""
    ) {
      return `draw`;
    }
    return "";
  }

  gameResult() {
    if (this.getWinner() === "X" || this.getWinner() === "O") {
      return `Player ${this.getWinner()} is the winner!`;
    } else if (this.getWinner() === "draw") {
      return "It's a tie!";
    } else return "";
  }

  resetGame() {
    this.field = ["", "", "", "", "", "", "", "", ""];
    this.activePlayer = "X";
    this.winner = "";
  }
}
