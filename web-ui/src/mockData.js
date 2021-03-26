export function mockGameInfo(textId) {
    return {
        textId: textId,
        name: textId,
        skill: "Brain, Eyes",
        avatar: "image"
    }
}

export function mockGames() {
    return [mockGameInfo("sudoku"), mockGameInfo("knight-tour"), mockGameInfo("random-game"), mockGameInfo("test-game")]
}

export function mockTrainers() {
    return [
        {
            id: 1,
            username: "Hulk",
            "elo": 2000
        },
        {
            id: 2,
            username: "Puskin",
            "elo": 1900
        },
        {
            id: 3,
            username: "Hehe",
            "elo": 1800
        }
    ]
}