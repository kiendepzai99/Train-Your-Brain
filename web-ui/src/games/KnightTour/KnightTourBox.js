import React, {useCallback, useEffect, useRef} from "react";
import {DEFAULT_KNIGHT_TOUR_SIZE, DEFAULT_SUDOKU_BOARD_CELL} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";
import {useSelector} from "react-redux";
import knightTourService from "../../service/KnightTourService";
import canvasService from "../../service/CanvasService";

export default function KnightTourBox(props) {
    const canvasRef = useRef();

    // Stored state
    const knightPosition = useSelector(state => {
        return state.games.KnightTour.knightPosition;
    })

    const boardStatus = props.boardStatus;

    const drawBoard = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.clearBoard(canvas);
        boardFactory.getChessBoard(ctx, DEFAULT_SUDOKU_BOARD_CELL);

        canvasService.fillCell(ctx, knightPosition, 'Aqua');
        knightTourService.drawBoardStatus(ctx, boardStatus);
    }, [boardStatus, knightPosition])

    const clearBoard = () => {
        const canvas = canvasRef.current;
        boardFactory.clearBoard(canvas);
    }

    const handleMouseOver = () => {
        canvasRef.current.style.cursor = "pointer";
    }
    useEffect(() => {
        if (props.visible) {
            drawBoard()
        } else clearBoard()
    }, [drawBoard, props.visible])

    return (
        <canvas ref={canvasRef}
                className={"border border-danger"}
                width={DEFAULT_KNIGHT_TOUR_SIZE}
                height={DEFAULT_KNIGHT_TOUR_SIZE}
                onMouseOver={handleMouseOver}
        />
    )
}