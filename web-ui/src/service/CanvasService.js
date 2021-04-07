import Point from "../utils/Point";
import {CELL_SIZE, LINE_WIDTH} from "../constants/BoardConstants";

const getPosition = (canvas, event, isDebug = false) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const point = new Point(x, y);
    const xy = point.toPosition();
    if (isDebug) console.log(xy);

    return xy;
}

const fillCurrentCell = (ctx, position, color = 'red') => {
    if (position !== undefined && position !== null) {
        const xFrom = position.col * (CELL_SIZE + 1) + LINE_WIDTH;
        const yFrom = position.row * (CELL_SIZE + 1) + LINE_WIDTH;
        ctx.fillStyle = color;
        ctx.fillRect(xFrom + LINE_WIDTH, yFrom + LINE_WIDTH, CELL_SIZE - LINE_WIDTH, CELL_SIZE - LINE_WIDTH);
    }
}

const drawCellValue = (ctx, position, value, color = 'red') => {
    if (position !== undefined && position !== null) {
        ctx.font = '30px Comic Sans MS';
        ctx.fillStyle = color;

        let offset
        const valueLength = (value + '').length;
        if (valueLength === 1) {
            offset = 20
        } else if (valueLength === 2) {
            offset = 13
        } else offset = 5
        ctx.fillText(value,
            (CELL_SIZE + LINE_WIDTH) * position.col + LINE_WIDTH + offset,
            (CELL_SIZE + LINE_WIDTH) * position.row + LINE_WIDTH + 40)
    }
}

const canvasService = {
    getPosition,
    fillCurrentCell,
    drawCellValue
}

export default canvasService;