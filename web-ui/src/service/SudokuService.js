import {LINE_WIDTH, resolveCellSize} from "../constants/BoardConstants";
import SudokuGame from "../games/Sudoku/SudokuGame";
import {mockSudokuBoard} from "../mockData";
import canvasService from "./CanvasService";
import Position from "../utils/Position";

const displayBoard = (ctx, boardStatus, boardSize, cellNumber) => {
    ctx.font = '30px Comic Sans MS';

    const cellSize = resolveCellSize(boardSize, cellNumber)

    if (boardStatus !== null && boardStatus !== undefined)
        boardStatus.forEach((row, i) => {
            row.forEach((item, j) => {
                const value = item.value
                if (!isNaN(value) && value !== null && value > 0) {
                    const color = item.editable ? 'red' : 'gray'
                    canvasService.drawCellValue(ctx, new Position(i, j), cellSize, value, color);
                }
            })
        })
}

const drawConflict = (ctx, conflictPositions, boardSize, cellNumber, lineWidth = LINE_WIDTH) => {
    const cellSize = resolveCellSize(boardSize, cellNumber)

    conflictPositions.forEach(position => {
        const xFrom = position.col * (cellSize + 1) + lineWidth;
        const yFrom = position.row * (cellSize + 1) + lineWidth;
        ctx.fillStyle = 'yellow';
        ctx.fillRect(xFrom + lineWidth, yFrom + lineWidth, cellSize - lineWidth, cellSize - lineWidth);
    })
}

const getGame = (level) => {
    const boardStatus = mockSudokuBoard(level)

    return new SudokuGame(level, boardStatus)
}

const sudokuService = {
    displayBoard,
    drawConflict,
    getGame
}

export default sudokuService;