export default function rootReducer(state, action) {
    switch (action) {
        case "test":
            return {
                ...state,
                greeting: "halo"
            }
        default:
            return state;
    }
}