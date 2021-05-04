export const CELL_SIZE = 58;
export const DEFAULT_SUDOKU_BOARD_CELL = 9;
export const LINE_WIDTH = 1;
export const DEFAULT_SUDOKU_BOARD_SIZE = CELL_SIZE * DEFAULT_SUDOKU_BOARD_CELL + (DEFAULT_SUDOKU_BOARD_CELL + 2) * LINE_WIDTH;

export const DEFAULT_BOARD_SIZE = 514;

export const resolveCellSize = (boardSize, cellNumber, lineWidth = LINE_WIDTH) => {
    return (boardSize - lineWidth * (cellNumber + 2)) / cellNumber;
}