import {combineReducers} from "redux";
import knightTourReducer from "./KnightTourReducer";

const gameReducer = combineReducers({
    KnightTour: knightTourReducer
});

export default gameReducer;