export function mockGameInfo(textId) {
    return {
        textId: textId,
        name: textId,
        skill: "Brain, Eyes",
        avatar: "image"
    }
}

export function mockGames() {
    return [mockGameInfo("sudoku"), mockGameInfo("chinese-chess"), mockGameInfo("random-game"), mockGameInfo("test-game")]
}