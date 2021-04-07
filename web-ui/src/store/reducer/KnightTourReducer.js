import GameLevel from "../../constants/GameLevel";
import Position from "../../utils/Position";
import KnightTourAction from "../action/KnightTourAction";
import {mockKnightBoardStatus} from "../../mockData";
import knightTourService from "../../service/KnightTourService";
import {DEFAULT_KNIGHT_TOUR_CELL} from "../../constants/BoardConstants";

const initState = {
    level: GameLevel.EASY,
    knightPosition: new Position(1, 3),
    pickingPosition: null,
    knightValue: 13,
    typingValue: null,
    boardStatus: mockKnightBoardStatus(),
    movablePositions: knightTourService.findMovablePositions(new Position(1, 3), DEFAULT_KNIGHT_TOUR_CELL)
}

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
                movablePositions: action.payload
            }
        default:
            return state;
    }
}