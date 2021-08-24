class TicTacToe {
    constructor() {
        this.state = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentPlayer = 'x';
    }

    getCurrentPlayerSymbol() {
       return this.currentPlayer;
    }

    nextTurn(row, col) {
        if (this.state[row][col] == null) {
            this.state[row][col] = this.currentPlayer;
             if (this.currentPlayer == "x") {
            this.currentPlayer = "o";
            } else {
            this.currentPlayer = "x";
      }           
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) return true;
        else {
            return false;
        }    
    }

    getWinner() {
       if (
      (this.state[0][0] == "x" &&
        this.state[0][1] == "x" &&
        this.state[0][2] == "x") ||
      (this.state[1][0] == "x" &&
        this.state[1][1] == "x" &&
        this.state[1][2] == "x") ||
      (this.state[2][0] == "x" &&
        this.state[2][1] == "x" &&
        this.state[2][2] == "x") ||
      (this.state[0][0] == "x" &&
        this.state[1][0] == "x" &&
        this.state[2][0] == "x") ||
      (this.state[0][1] == "x" &&
        this.state[1][1] == "x" &&
        this.state[2][1] == "x") ||
      (this.state[0][2] == "x" &&
        this.state[1][2] == "x" &&
        this.state[2][2] == "x") ||
      (this.state[0][0] == "x" &&
        this.state[1][1] == "x" &&
        this.state[2][2] == "x") ||
      (this.state[0][2] == "x" &&
        this.state[1][1] == "x" &&
        this.state[2][0] == "x")
    ) {
      return "x";
    } else if (
      (this.state[0][0] == "o" &&
        this.state[0][1] == "o" &&
        this.state[0][2] == "o") ||
      (this.state[1][0] == "o" &&
        this.state[1][1] == "o" &&
        this.state[1][2] == "o") ||
      (this.state[2][0] == "o" &&
        this.state[2][1] == "o" &&
        this.state[2][2] == "o") ||
      (this.state[0][0] == "o" &&
        this.state[1][0] == "o" &&
        this.state[2][0] == "o") ||
      (this.state[0][1] == "o" &&
        this.state[1][1] == "o" &&
        this.state[2][1] == "o") ||
      (this.state[0][2] == "o" &&
        this.state[1][2] == "o" &&
        this.state[2][2] == "o") ||
      (this.state[0][0] == "o" &&
        this.state[1][1] == "o" &&
        this.state[2][2] == "o") ||
      (this.state[0][2] == "o" &&
        this.state[1][1] == "o" &&
        this.state[2][0] == "o")
    ) {
      return "o";
    } else {
      return null;
    }
    }

    noMoreTurns() {
        let box = 0;
    for (let col = 0; col < this.state.length; col++) {
      for (let row = 0; row < this.state[col].length; row++) {
        if (this.state[col][row] == null) {
          box++;
        }
      }
    }
    if (box > 0) {
            return false;
        } else {
            return true;
        }
    }

    isDraw() {
    if (this.getWinner() === null && this.noMoreTurns() === true) {
        return true;
    }
        return false;
    }

    getFieldValue(row, col) {
        return this.state[row][col];
    }
}

module.exports = TicTacToe;
