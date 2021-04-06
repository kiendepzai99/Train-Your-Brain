import React, {useEffect, useRef, useState} from "react";
import {DEFAULT_KNIGHT_TOUR_SIZE, DEFAULT_SUDOKU_BOARD_CELL} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";
import knightTourService from "../../service/KnightTourService";
import Position from "../../utils/Position";
import canvasService from "../../service/CanvasService";

export default function KnightTourPG(props) {
    const canvasRef = useRef();
    const [currentPosition, setCurrentPosition] = useState(new Position(1, 4));
    const [movablePositions, setMovablePositions] = useState([]);
    const [waitingNumber, setWaitingNumber] = useState(false);

    const drawBoard = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.clearBoard(canvas);
        boardFactory.getChessBoard(ctx, DEFAULT_SUDOKU_BOARD_CELL);
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
                setWaitingNumber(true);
            }
        })
    }

    useEffect((
        drawBoard
    ), [movablePositions]);

    return (
        <canvas ref={canvasRef}
                className={"border border-danger"}
                width={DEFAULT_KNIGHT_TOUR_SIZE}
                height={DEFAULT_KNIGHT_TOUR_SIZE}
                onClick={handleMouseClick}
                onMouseOver={handleMouseOver}
        />
    )
}