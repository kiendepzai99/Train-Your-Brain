import {CELL_SIZE, LINE_WIDTH} from "../constants/BoardConstants";

const getSudokuBoard = (ctx, size) => {
    for (let i = 0; i <= size; i++) {
        ctx.beginPath();
        ctx.lineWidth = LINE_WIDTH;
        if (i % 3 === 0) {
            ctx.strokeStyle = 'black';
        } else {
            ctx.strokeStyle = "lightgrey";
        }
        ctx.moveTo(0, (CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH);
        ctx.lineTo((CELL_SIZE + LINE_WIDTH) * size + LINE_WIDTH, (CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH);
        ctx.moveTo((CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH, 0);
        ctx.lineTo((CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH, (CELL_SIZE + LINE_WIDTH) * size + LINE_WIDTH);
        ctx.stroke();
    }
}

const getChessBoard = (ctx, size) => {
    for (let i = 0; i <= size; i++) {
        ctx.beginPath();
        ctx.lineWidth = LINE_WIDTH;
        ctx.strokeStyle = 'black';

        ctx.moveTo(0, (CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH);
        ctx.lineTo((CELL_SIZE + LINE_WIDTH) * size + LINE_WIDTH, (CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH);
        ctx.moveTo((CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH, 0);
        ctx.lineTo((CELL_SIZE + LINE_WIDTH) * i + LINE_WIDTH, (CELL_SIZE + LINE_WIDTH) * size + LINE_WIDTH);
        ctx.stroke();
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