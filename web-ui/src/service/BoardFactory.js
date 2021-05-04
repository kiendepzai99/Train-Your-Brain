import {DEFAULT_BOARD_SIZE, LINE_WIDTH, resolveCellSize} from "../constants/BoardConstants";

const drawBoard = (ctx, cellNumber, i, boardSize) => {
    const cellSize = resolveCellSize(boardSize, cellNumber)

    ctx.moveTo(LINE_WIDTH, (cellSize + LINE_WIDTH) * i + LINE_WIDTH);
    ctx.lineTo((cellSize + LINE_WIDTH) * cellNumber + LINE_WIDTH, (cellSize + LINE_WIDTH) * i + LINE_WIDTH);
    ctx.moveTo((cellSize + LINE_WIDTH) * i + LINE_WIDTH, LINE_WIDTH);
    ctx.lineTo((cellSize + LINE_WIDTH) * i + LINE_WIDTH, (cellSize + LINE_WIDTH) * cellNumber + LINE_WIDTH);
    ctx.stroke();
}

const getSudokuBoard = (ctx, cellNumber, boardSize = DEFAULT_BOARD_SIZE) => {
    for (let i = 0; i <= cellNumber; i++) {
        ctx.beginPath();
        ctx.lineWidth = LINE_WIDTH;
        if (i % 3 === 0) {
            ctx.strokeStyle = 'black';
        } else {
            ctx.strokeStyle = "lightgrey";
        }
        drawBoard(ctx, cellNumber, i, boardSize);
    }
}

const getChessBoard = (ctx, cellNumber, boardSize = DEFAULT_BOARD_SIZE) => {
    for (let i = 0; i <= cellNumber; i++) {
        ctx.beginPath();
        ctx.lineWidth = LINE_WIDTH;
        ctx.strokeStyle = 'black';

        drawBoard(ctx, cellNumber, i, boardSize);
    }
}

const clearBoard = canvas => {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
};

const boardFactory = {
    clearBoard,
    getSudokuBoard,
    getChessBoard
}

export default boardFactory;