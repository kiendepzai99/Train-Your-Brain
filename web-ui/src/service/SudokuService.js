import {CELL_SIZE, LINE_WIDTH} from "../constants/BoardConstants";

const displayBoard = (ctx, boardStatus) => {
    ctx.font = '30px Comic Sans MS';
    ctx.fillStyle = 'gray';

    const offset = 20;
    boardStatus.forEach((row, i) => {
        row.forEach((value, j) => {
            ctx.fillText(value, (CELL_SIZE + LINE_WIDTH) * j + LINE_WIDTH + offset, (CELL_SIZE + LINE_WIDTH) * (i + 1) + LINE_WIDTH - offset)
        })
    })
}

const drawPickingCell = (ctx, position) => {

    if (position != null) {
        const xFrom = position.col * (CELL_SIZE + 1) + LINE_WIDTH;
        const yFrom = position.row * (CELL_SIZE + 1) + LINE_WIDTH;
        console.log(xFrom, yFrom);
        ctx.fillStyle = 'green';
        ctx.fillRect(xFrom + LINE_WIDTH, yFrom + LINE_WIDTH, CELL_SIZE - LINE_WIDTH, CELL_SIZE - LINE_WIDTH);
    }
}

const sudokuService = {
    displayBoard,
    drawPickingCell
}

export default sudokuService;