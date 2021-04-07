import React, {useEffect, useRef, useState} from "react";
import {
    DEFAULT_KNIGHT_TOUR_CELL,
    DEFAULT_KNIGHT_TOUR_SIZE,
    DEFAULT_SUDOKU_BOARD_CELL
} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";
import knightTourService from "../../service/KnightTourService";
import Position from "../../utils/Position";
import canvasService from "../../service/CanvasService";

export default function KnightTourPG(props) {
    const canvasRef = useRef();
    const [currentPosition, setCurrentPosition] = useState(new Position(1, 4));
    const [pickingPosition, setPickingPosition] = useState(null);
    const [currentValue, setCurrentValue] = useState(33);
    const [movablePositions, setMovablePositions] = useState(knightTourService.findMovablePositions(currentPosition, DEFAULT_KNIGHT_TOUR_CELL));
    const [typingValue, setTypingValue] = useState(null);

    const drawBoard = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.clearBoard(canvas);
        boardFactory.getChessBoard(ctx, DEFAULT_SUDOKU_BOARD_CELL);

        canvasService.fillCurrentCell(ctx, currentPosition, 'Aqua');
        canvasService.fillCurrentCell(ctx, pickingPosition, 'Aquamarine');
        canvasService.drawCellValue(ctx, currentPosition, currentValue);
        if (typingValue != null) {
            canvasService.drawCellValue(ctx, pickingPosition, typingValue);

        }
        knightTourService.drawMovablePositions(ctx, movablePositions);
    }

    const handleMouseOver = () => {
        canvasRef.current.style.cursor = "pointer";
    }

    const handleMouseClick = (event) => {
        const canvas = canvasRef.current;
        const xy = canvasService.getPosition(canvas, event)
        if (xy == null) return;

        movablePositions.forEach(position => {
            if (xy.compareTo(position)) {
                setPickingPosition(xy);
                setMovablePositions(knightTourService.findMovablePositions(currentPosition, DEFAULT_KNIGHT_TOUR_CELL, [xy]));
            }
        })
    }

    const handleKeyDown = (event) => {
        console.log(event.key);
        const key = Number(event.key);
        if (event.key === 'Backspace') {
            setTypingValue((typingValue + '').slice(0, -1));
        }
        if (!isNaN(key) && event.key != null && event.key !== ' ') {
            // Limit only 3 digits
            if (pickingPosition != null && typingValue < 100) {
                setTypingValue((typingValue == null ? "" : typingValue) + "" + key);
            }
        }

    }

    useEffect((
        drawBoard
    ), [currentPosition, currentValue, movablePositions, pickingPosition, typingValue]);

    return (
        <canvas ref={canvasRef}
                tabIndex="1"
                className={"border border-danger"}
                width={DEFAULT_KNIGHT_TOUR_SIZE}
                height={DEFAULT_KNIGHT_TOUR_SIZE}
                onClick={handleMouseClick}
                onMouseOver={handleMouseOver}
                onKeyDown={handleKeyDown}
        />
    )
}