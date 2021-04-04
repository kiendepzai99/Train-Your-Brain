import {CELL_SIZE, DEFAULT_SUDOKU_BOARD_CELL} from "../constants/BoardConstants";
import Position from "./Position";

export default class Point {
    constructor(clientX, clientY) {
        this.clientX = clientX;
        this.clientY = clientY;
    }

    getXY() {
        for (let i = 0; i < DEFAULT_SUDOKU_BOARD_CELL; i++) {
            for (let j = 0; j < DEFAULT_SUDOKU_BOARD_CELL; j++) {
                let xCoordinate = CELL_SIZE / 2 + (CELL_SIZE + 1) * j + 1;
                let yCoordinate = CELL_SIZE / 2 + (CELL_SIZE + 1) * i + 1;

                if (this.getDistance(xCoordinate, yCoordinate) <= CELL_SIZE / 2) {
                    return i + '' + j;
                }
            }
        }
        return '-1';
    }

    toPosition() {
        for (let i = 0; i < DEFAULT_SUDOKU_BOARD_CELL; i++) {
            for (let j = 0; j < DEFAULT_SUDOKU_BOARD_CELL; j++) {
                let xCoordinate = CELL_SIZE / 2 + (CELL_SIZE + 1) * j + 1;
                let yCoordinate = CELL_SIZE / 2 + (CELL_SIZE + 1) * i + 1;

                if (this.getDistance(xCoordinate, yCoordinate) <= CELL_SIZE / 2) {
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