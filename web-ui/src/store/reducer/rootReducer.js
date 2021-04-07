import {combineReducers} from "redux";
import gameReducer from "./GameReducer";

const rootReducer = combineReducers({
    games: gameReducer
});

export default rootReducer;
