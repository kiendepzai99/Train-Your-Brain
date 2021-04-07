import {CELL_SIZE, LINE_WIDTH} from "../constants/BoardConstants";
import Position from "../utils/Position";
import canvasService from "./CanvasService";

const drawMovablePositions = (ctx, movablePositions) => {
    movablePositions.forEach((position) => {
        const [row, col] = position.toRowCol();

        ctx.lineWidth = 3;
        ctx.strokeStyle = 'red';

        ctx.beginPath();
        ctx.arc(col * (CELL_SIZE + LINE_WIDTH) + CELL_SIZE / 2,
            row * (CELL_SIZE + LINE_WIDTH) + CELL_SIZE / 2,
            5,
            0,
            Math.PI * 2
        )
        ctx.stroke();
    })
}

const findMovablePositions = (knightPosition, boardSize, excludedPositions) => {
    const [x, y] = knightPosition.toRowCol();
    const movablePositions = [];
    if (x - 2 >= 0 && y - 1 >= 0) {
        movablePositions.push(new Position(x - 2, y - 1));
    }
    if (x - 2 >= 0 && y + 1 < boardSize) {
        movablePositions.push(new Position(x - 2, y + 1));
    }
    if (x + 2 < boardSize && y - 1 >= 0) {
        movablePositions.push(new Position(x + 2, y - 1));
    }
    if (x + 2 < boardSize && y + 1 < boardSize) {
        movablePositions.push(new Position(x + 2, y + 1));
    }
    if (x - 1 >= 0 && y - 2 >= 0) {
        movablePositions.push(new Position(x - 1, y - 2));
    }
    if (x - 1 >= 0 && y + 2 < boardSize) {
        movablePositions.push(new Position(x - 1, y + 2));
    }
    if (x + 1 < boardSize && y - 2 >= 0) {
        movablePositions.push(new Position(x + 1, y - 2));
    }
    if (x + 1 < boardSize && y + 2 < boardSize) {
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

const drawBoardStatus = (ctx, boardStatus) => {
    if (boardStatus !== null && boardStatus !== undefined)
        boardStatus.forEach((row, i) => {
            row.forEach((item, j) => {
                if (!isNaN(item) && item !== null && item > 0) {
                    canvasService.drawCellValue(ctx, new Position(i, j), item);
                }
            })
        })
}

const knightTourService = {
    drawMovablePositions,
    findMovablePositions,
    movable,
    drawBoardStatus
}

export default knightTourService;