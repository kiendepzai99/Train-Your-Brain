import {combineReducers} from "redux";
import knightTourReducer from "./KnightTourReducer";
import nPuzzleReducer from "./NPuzzleReducer";

const gameReducer = combineReducers({
    KnightTour: knightTourReducer,
    NPuzzle: nPuzzleReducer,
});

export default gameReducer;