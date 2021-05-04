import {resolveCellSize} from "../constants/BoardConstants";
import Position from "./Position";

export default class Point {
    constructor(clientX, clientY) {
        this.clientX = clientX;
        this.clientY = clientY;
    }

    toPosition(boardSize, cellNumber) {
        const cellSize = resolveCellSize(boardSize, cellNumber)
        for (let i = 0; i < cellNumber; i++) {
            for (let j = 0; j < cellNumber; j++) {
                let xCoordinate = cellSize / 2 + (cellSize + 1) * j + 1;
                let yCoordinate = cellSize / 2 + (cellSize + 1) * i + 1;

                if (this.getDistance(xCoordinate, yCoordinate) <= cellSize / 2) {
                    return new Position(i, j);
                }
            }
        }
        return null;
    }

    getDistance(toX, toY) {
        return Math.sqrt(
            Math.pow(this.clientX - toX, 2) + Math.pow(this.clientY - toY, 2)
        );
    }

}