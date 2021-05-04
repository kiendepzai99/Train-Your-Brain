export default class SudokuGame {
    constructor(level, boardStatus) {
        this.level = level
        this.cellNumber = SudokuGame.resolveCellNumber(this.level)
        this.boardStatus = boardStatus
        this.pickingPosition = null
        this.conflictPositions = []
    }

    static resolveCellNumber(level) {
        if (level != null)
            return 9;
    }
}