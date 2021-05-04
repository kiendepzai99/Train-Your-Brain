import GameLevel from "../../constants/GameLevel";
import {cloneArray} from "../../utils/ArrayUtils";
import Position from "../../utils/Position";

export default class NPuzzleGame {
    constructor(level, boardInit, boardGoal, moveAllowed) {
        this.level = level
        this.cellNumber = NPuzzleGame.resolveCellNumber(level)
        this.boardStatusInit = cloneArray(boardInit)
        this.boardStatus = cloneArray(boardInit)
        this.boardGoal = cloneArray(boardGoal)
        this.moveAllowed = moveAllowed
        this.moveLeft = moveAllowed
    }

    static resolveCellNumber(level) {
        switch (level) {
            case GameLevel.EASY:
                return 3
            case GameLevel.MEDIUM:
                return 4
            case GameLevel.HARD:
                return 6
            case GameLevel.EXPERT:
                return 8
            default:
                return 10
        }
    }

    static getEmptyPosition(boardStatus) {
        let result = null;
        boardStatus.forEach((row, i) => {
            if (result != null) return;
            row.forEach((item, j) => {
                if (item === 0) {
                    result = new Position(i, j);
                }
            })
        })
        return result;
    }
}