import Position from "../utils/Position";
import canvasService from "./CanvasService";
import {resolveCellSize} from "../constants/BoardConstants";

const drawBoardStatus = (ctx, boardStatus, boardSize, cellNumber) => {
    const cellSize = resolveCellSize(boardSize, cellNumber)

    if (boardStatus !== null && boardStatus !== undefined)
        boardStatus.forEach((row, i) => {
            row.forEach((item, j) => {
                if (!isNaN(item) && item !== null && item > 0) {
                    canvasService.drawCellValue(ctx, new Position(i, j), cellSize, item);
                } else if (item === 0) {
                    canvasService.fillCell(ctx, new Position(i, j), cellSize, "Aqua")
                }
            })
        })
}

const nPuzzleService = {
    drawBoardStatus
}

export default nPuzzleService;