import {combineReducers} from "redux";
import knightTourReducer from "./KnightTourReducer";
import nPuzzleReducer from "./NPuzzleReducer";
import sudokuReducer from "./SudokuReducer";

const gameReducer = combineReducers({
    KnightTour: knightTourReducer,
    NPuzzle: nPuzzleReducer,
    Sudoku: sudokuReducer
});

export default gameReducer;