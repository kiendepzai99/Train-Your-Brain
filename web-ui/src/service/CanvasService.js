import Point from "../utils/Point";

const getPosition = (canvas, event, isDebug = false) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const point = new Point(x, y);
    const xy = point.toPosition();
    if (isDebug) console.log(xy);

    return xy;
}

const canvasService = {
    getPosition
}

export default canvasService;