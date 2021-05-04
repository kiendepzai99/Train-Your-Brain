import {LINE_WIDTH, resolveCellSize} from "../constants/BoardConstants";
import Position from "../utils/Position";
import canvasService from "./CanvasService";
import KnightTourGame from "../games/KnightTour/KnightTourGame";

const drawMovablePositions = (ctx, boardSize, cellNumber, movablePositions, lineWidth = LINE_WIDTH) => {
    const cellSize = resolveCellSize(boardSize, cellNumber)

    movablePositions.forEach((position) => {
        const [row, col] = position.toRowCol();

        ctx.lineWidth = 3;
        ctx.strokeStyle = 'red';

        ctx.beginPath();
        ctx.arc(col * (cellSize + lineWidth) + cellSize / 2,
            row * (cellSize + lineWidth) + cellSize / 2,
            5,
            0,
            Math.PI * 2
        )
        ctx.stroke();
    })
}

const findMovablePositions = (knightPosition, cellNumber, excludedPositions) => {
    const [x, y] = knightPosition.toRowCol();
    const movablePositions = [];
    if (x - 2 >= 0 && y - 1 >= 0) {
        movablePositions.push(new Position(x - 2, y - 1));
    }
    if (x - 2 >= 0 && y + 1 < cellNumber) {
        movablePositions.push(new Position(x - 2, y + 1));
    }
    if (x + 2 < cellNumber && y - 1 >= 0) {
        movablePositions.push(new Position(x + 2, y - 1));
    }
    if (x + 2 < cellNumber && y + 1 < cellNumber) {
        movablePositions.push(new Position(x + 2, y + 1));
    }
    if (x - 1 >= 0 && y - 2 >= 0) {
        movablePositions.push(new Position(x - 1, y - 2));
    }
    if (x - 1 >= 0 && y + 2 < cellNumber) {
        movablePositions.push(new Position(x - 1, y + 2));
    }
    if (x + 1 < cellNumber && y - 2 >= 0) {
        movablePositions.push(new Position(x + 1, y - 2));
    }
    if (x + 1 < cellNumber && y + 2 < cellNumber) {
        movablePositions.push(new Position(x + 1, y + 2));
    }

    if (excludedPositions !== undefined && excludedPositions != null)
        movablePositions.forEach(movable => {
            excludedPositions.forEach(excluded => {
                if (movable.compareTo(excluded)) {
                    const index = movablePositions.indexOf(movable);
                    movablePositions.splice(index, 1);
                }
            })
        })

    return movablePositions;
}

const movable = (from, to) => {
    if (Math.abs(from.row - to.row) === 2 && Math.abs(from.col - to.col) === 1) return true;
    return Math.abs(from.row - to.row) === 1 && Math.abs(from.col - to.col) === 2;
}

const drawBoardStatus = (ctx, boardStatus, boardSize, cellNumber) => {
    const cellSize = resolveCellSize(boardSize, cellNumber)

    if (boardStatus !== null && boardStatus !== undefined)
        boardStatus.forEach((row, i) => {
            row.forEach((item, j) => {
                if (!isNaN(item) && item !== null && item > 0) {
                    canvasService.drawCellValue(ctx, new Position(i, j), cellSize, item);
                }
            })
        })
}

const getGame = (level) => {
    // TODO: Update this data
    return new KnightTourGame(level, new Position(1, 3), 13)
}

const knightTourService = {
    drawMovablePositions,
    findMovablePositions,
    movable,
    drawBoardStatus,
    getGame
}

export default knightTourService;