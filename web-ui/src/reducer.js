import GameLevel from "./constants/GameLevel";

const initState = {
    games: {
        KnightTour: {
            level: GameLevel.EASY
        }
    }
}

export default function rootReducer(state = initState, action) {
    // console.log("Reducer called")
    switch (action.type) {
        case "test":
            return {
                ...state,
                games: {
                    ...state.games,
                    KnightTour: {
                        ...state.games.KnightTour,
                        level: action.payload.level
                    }
                }
            }
        default:
            return state;
    }
}