export default class Position {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    toRowCol() {
        return [this.row, this.col];
    }

    compareTo(position) {
        return this.row === position.row && this.col === position.col;
    }
}