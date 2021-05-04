import sudokuService from "../../service/SudokuService";
import GameLevel from "../../constants/GameLevel";
import SudokuAction from "../action/SudokuAction";

const initState = sudokuService.getGame(GameLevel.EASY)

export default function sudokuReducer(state = initState, action) {
    switch (action.type) {
        case SudokuAction.updateBoardStatus:
            return {
                ...state,
                boardStatus: action.payload
            }
        case SudokuAction.updatePickingPosition:
            return {
                ...state,
                pickingPosition: action.payload
            }
        case SudokuAction.updateConflictPositions:
            return {
                ...state,
                conflictPositions: [...action.payload]
            }
        default:
            return state
    }
}