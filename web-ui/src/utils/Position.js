export default class Position {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    toRowCol() {
        return [this.row, this.col];
    }

    compareTo(position) {
        if (position === null || position === undefined || !(position instanceof Position)) return false;
        return this.row === position.row && this.col === position.col;
    }
}