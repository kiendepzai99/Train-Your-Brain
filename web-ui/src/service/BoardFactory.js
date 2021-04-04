import {CELL_SIZE, LINE_WIDTH} from "../constants/BoardConstants";

const drawBoard = (ctx, size, i) => {
    ctx.moveTo(LINE_WIDTH, (CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH);
    ctx.lineTo((CELL_SIZE + LINE_WIDTH) * size + LINE_WIDTH, (CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH);
    ctx.moveTo((CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH, LINE_WIDTH);
    ctx.lineTo((CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH, (CELL_SIZE + LINE_WIDTH) * size + LINE_WIDTH);
    ctx.stroke();
}

const getSudokuBoard = (ctx, size) => {
    for (let i = 0; i <= size; i++) {
        ctx.beginPath();
        ctx.lineWidth = LINE_WIDTH;
        if (i % 3 === 0) {
            ctx.strokeStyle = 'black';
        } else {
            ctx.strokeStyle = "lightgrey";
        }
        drawBoard(ctx, size, i);
    }
}

const getChessBoard = (ctx, size) => {
    for (let i = 0; i <= size; i++) {
        ctx.beginPath();
        ctx.lineWidth = LINE_WIDTH;
        ctx.strokeStyle = 'black';

        drawBoard(ctx, size, i);
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