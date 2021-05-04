import GameLevel from "../../constants/GameLevel";
import KnightTourAction from "../action/KnightTourAction";
import knightTourService from "../../service/KnightTourService";
import {cloneArray} from "../../utils/ArrayUtils";

const initState = knightTourService.getGame(GameLevel.EASY)

export default function knightTourReducer(state = initState, action) {
    switch (action.type) {
        case KnightTourAction.changeLevel:
            return {
                ...state,
                level: action.payload
            }
        case KnightTourAction.updateTypingValue:
            return {
                ...state,
                typingValue: action.payload
            }
        case KnightTourAction.updateKnightValue:
            return {
                ...state,
                knightValue: action.payload
            }
        case KnightTourAction.updatePickingPosition:
            return {
                ...state,
                pickingPosition: action.payload
            }
        case KnightTourAction.updateKnightPosition:
            return {
                ...state,
                knightPosition: action.payload
            }
        case KnightTourAction.updateMovablePositions:
            return {
                ...state,
                movablePositions: [...action.payload]
            }
        case KnightTourAction.updateBoardStatus:
            return {
                ...state,
                boardStatus: cloneArray(action.payload)
            }
        default:
            return state;
    }
}