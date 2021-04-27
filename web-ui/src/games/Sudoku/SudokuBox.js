import React, {useCallback, useEffect, useRef, useState} from "react";
import {DEFAULT_SUDOKU_BOARD_CELL, DEFAULT_SUDOKU_BOARD_SIZE} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";
import sudokuService from "../../service/SudokuService";
import {mockSudokuBoard} from "../../mockData";
import Item from "../../utils/Item";
import Position from "../../utils/Position";
import canvasService from "../../service/CanvasService";

export default function SudokuBox(props) {
    const canvasRef = useRef();
    const [boardStatus, setBoardStatus] = useState(null);
    const [pickingPosition, setPickingPosition] = useState(null);
    const [conflictPositions, setConflictPositions] = useState([]);

    const drawBoard = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.clearBoard(canvas);
        boardFactory.getSudokuBoard(ctx, DEFAULT_SUDOKU_BOARD_CELL);
        canvasService.fillCell(ctx, pickingPosition, 'lightGrey');
        sudokuService.drawConflict(ctx, conflictPositions);
        if (boardStatus != null) {
            sudokuService.displayBoard(ctx, boardStatus);
        }
    }, [boardStatus, conflictPositions, pickingPosition])

    const handleMouseOver = () => {
        canvasRef.current.style.cursor = "pointer";
    }

    const handlePressKey = (event) => {
        console.log(event.key);
        const key = Number(event.key);
        if (!isNaN(key) && event.key != null && event.key !== ' ') {
            if (pickingPosition != null) {
                const [row, col] = [pickingPosition.row, pickingPosition.col];
                const item = boardStatus[row][col];
                if (item.editable) {
                    const newBoardStatus = [...boardStatus];
                    newBoardStatus[row][col] = new Item(key, true);
                    setBoardStatus(newBoardStatus)

                    processCheck(newBoardStatus, pickingPosition);
                }
            }
        }
    }

    const processCheck = (boardStatus, position) => {
        const [row, col] = [position.row, position.col];
        const currentItem = boardStatus[row][col];
        const conflictPositions = [];
        // Row check
        boardStatus[row].forEach((item, i) => {
            if (item.value === currentItem.value && currentItem.value !== 0) {
                conflictPositions.push(new Position(row, i));
            }
        })
        // Col check
        for (let i = 0; i < boardStatus.length; i++) {
            if (boardStatus[i][col].value === currentItem.value && currentItem.value !== 0) {
                conflictPositions.push(new Position(i, col));
            }
        }

        if (conflictPositions.length === 1) {
            conflictPositions.splice(0, 1);
        }
        setConflictPositions(conflictPositions)
    }

    const handleMove = (event) => {
        const canvas = canvasRef.current;
        const xy = canvasService.getPosition(canvas, event);
        if (xy == null) return;

        if (pickingPosition != null) {
            if (xy.compareTo(pickingPosition)) {
                setPickingPosition(null)
            } else {
                setPickingPosition(xy)
            }
        } else {
            setPickingPosition(xy)
        }
    }
    useEffect(() => {
        setBoardStatus(mockSudokuBoard(props.level))
    }, [props.level])

    useEffect(() => {
        drawBoard()

    }, [drawBoard])

    return (
        <canvas ref={canvasRef}
                tabIndex="1"
                width={DEFAULT_SUDOKU_BOARD_SIZE}
                height={DEFAULT_SUDOKU_BOARD_SIZE}
                onClick={handleMove}
                onMouseOver={handleMouseOver}
                onKeyPress={handlePressKey}
        />
    )
}