import {CELL_SIZE, LINE_WIDTH} from "../constants/BoardConstants";

const displayBoard = (ctx, boardStatus) => {
    ctx.font = '30px Comic Sans MS';

    const offset = 20;
    boardStatus.forEach((row, i) => {
        row.forEach((item, j) => {
            const value = item.value;
            if (value !== 0) {
                ctx.fillStyle = item.editable ? 'red' : 'gray';
                ctx.fillText(value, (CELL_SIZE + LINE_WIDTH) * j + LINE_WIDTH + offset, (CELL_SIZE + LINE_WIDTH) * (i + 1) + LINE_WIDTH - offset)
            }
        })
    })
}

const drawConflict = (ctx, conflictPositions) => {
    conflictPositions.forEach(position => {
        const xFrom = position.col * (CELL_SIZE + 1) + LINE_WIDTH;
        const yFrom = position.row * (CELL_SIZE + 1) + LINE_WIDTH;
        ctx.fillStyle = 'yellow';
        ctx.fillRect(xFrom + LINE_WIDTH, yFrom + LINE_WIDTH, CELL_SIZE - LINE_WIDTH, CELL_SIZE - LINE_WIDTH);
    })
}

const sudokuService = {
    displayBoard,
    drawConflict
}

export default sudokuService;