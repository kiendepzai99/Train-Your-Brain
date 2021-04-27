import React, {useCallback, useEffect, useRef, useState} from "react";
import boardFactory from "../../service/BoardFactory";
import {DEFAULT_BOARD_SIZE} from "../../constants/BoardConstants";
import {mockNPuzzleBoard} from "../../mockData";
import nPuzzleService from "../../service/NPuzzleService";
import Position from "../../utils/Position";

export default function NPuzzlePG(props) {
    const canvasRef = useRef();
    const boardSize = DEFAULT_BOARD_SIZE;
    const cellNumber = 3;
    const [boardStatus, setBoardStatus] = useState(null);
    const [currentHole, setCurrentHole] = useState(new Position(cellNumber - 1, cellNumber - 1))

    const drawBoard = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.clearBoard(canvas);
        boardFactory.getChessBoard(ctx, cellNumber, boardSize);
        if (boardStatus != null) {
            nPuzzleService.drawBoardStatus(ctx, boardStatus, boardSize, cellNumber)
        }
    }, [boardSize, boardStatus])

    const handleMouseOver = () => {
        canvasRef.current.style.cursor = "pointer";
    }

    const updateState = (currentRow, currentCol, newRow, newCol) => {
        const newBoardStatus = [...boardStatus]
        newBoardStatus[currentRow][currentCol] = boardStatus[newRow][newCol]
        boardStatus[newRow][newCol] = 0;
        setCurrentHole(new Position(newRow, newCol))
        setBoardStatus(newBoardStatus)
    }

    const handleOnKeyDown = (event) => {
        const key = event.key;
        // Left
        if (key === 'a') {
            const currentRow = currentHole.row
            const currentCol = currentHole.col
            const newRow = currentRow
            const newCol = currentCol - 1;
            if (currentCol > 0) {
                updateState(currentRow, currentCol, newRow, newCol)
            }
        }
        // Right
        if (key === 'd') {
            const currentRow = currentHole.row
            const currentCol = currentHole.col
            const newRow = currentRow
            const newCol = currentCol + 1;
            if (currentCol < cellNumber - 1) {
                updateState(currentRow, currentCol, newRow, newCol)
            }
        }
        // Up
        if (key === 'w') {
            const currentRow = currentHole.row
            const currentCol = currentHole.col
            const newRow = currentRow - 1
            const newCol = currentCol;
            if (currentRow > 0) {
                updateState(currentRow, currentCol, newRow, newCol)
            }
        }
        // Down
        if (key === 's') {
            const currentRow = currentHole.row
            const currentCol = currentHole.col
            const newRow = currentRow + 1
            const newCol = currentCol;
            if (currentRow < cellNumber - 1) {
                updateState(currentRow, currentCol, newRow, newCol)
            }
        }
    }

    useEffect(() => {
        setBoardStatus(mockNPuzzleBoard(cellNumber))
    }, [cellNumber])

    useEffect(() => {
        drawBoard()

    }, [drawBoard])

    return (
        <canvas ref={canvasRef}
                className="border border-danger"
                tabIndex="1"
                width={boardSize}
                height={boardSize}
                onMouseOver={handleMouseOver}
                onKeyDown={handleOnKeyDown}
        />
    )
}