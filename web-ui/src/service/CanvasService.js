import Point from "../utils/Point";
import {LINE_WIDTH} from "../constants/BoardConstants";

const getPosition = (canvas, event, isDebug = false) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const point = new Point(x, y);
    const xy = point.toPosition();
    if (isDebug) console.log(xy);

    return xy;
}

const fillCell = (ctx, position, cellSize, color = 'red') => {
    if (position !== undefined && position !== null) {
        const xFrom = position.col * (cellSize + 1) + LINE_WIDTH;
        const yFrom = position.row * (cellSize + 1) + LINE_WIDTH;
        ctx.fillStyle = color;
        ctx.fillRect(xFrom + LINE_WIDTH, yFrom + LINE_WIDTH, cellSize - LINE_WIDTH, cellSize - LINE_WIDTH);
    }
}

const drawCellValue = (ctx, position, cellSize, value, color = 'red',) => {
    if (position !== undefined && position !== null) {
        const fontSize = cellSize / 2;
        ctx.font = fontSize + 'px Comic Sans MS';
        ctx.fillStyle = color;

        // TODO: Improve offSet calculate method
        let offset = fontSize / 2
        ctx.fillText(value,
            (cellSize + LINE_WIDTH) * position.col + LINE_WIDTH + offset,
            (cellSize + LINE_WIDTH) * (position.row + 1) + LINE_WIDTH - offset)
    }
}

const canvasService = {
    getPosition,
    fillCell,
    drawCellValue
}

export default canvasService;