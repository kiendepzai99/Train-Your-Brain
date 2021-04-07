import GameLevel from "../../constants/GameLevel";
import Position from "../../utils/Position";
import KnightTourAction from "../action/KnightTourAction";

const initState = {
    level: GameLevel.EASY,
    knightPosition: new Position(1, 3),
    knightValue: null,
    typingValue: null
}

export default function knightTourReducer(state = initState, action) {
    switch (action.type) {
        case KnightTourAction.changeLevel:
            return {
                ...state,
                level: action.payload
            }
        default:
            return state;
    }
}