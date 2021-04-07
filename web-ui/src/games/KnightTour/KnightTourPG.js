import React, {useEffect, useRef} from "react";
import {
    DEFAULT_KNIGHT_TOUR_CELL,
    DEFAULT_KNIGHT_TOUR_SIZE,
    DEFAULT_SUDOKU_BOARD_CELL
} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";
import knightTourService from "../../service/KnightTourService";
import canvasService from "../../service/CanvasService";
import {useDispatch, useSelector} from "react-redux";
import KnightTourAction from "../../store/action/KnightTourAction";

export default function KnightTourPG(props) {
    const canvasRef = useRef();

    // Stored state
    const knightPosition = useSelector(state => {
        return state.games.KnightTour.knightPosition;
    })
    const knightValue = useSelector(state => {
        return state.games.KnightTour.knightValue;
    })
    const typingValue = useSelector(state => {
        return state.games.KnightTour.typingValue;
    })
    const pickingPosition = useSelector(state => {
        return state.games.KnightTour.pickingPosition
    })
    const movablePositions = useSelector(state => {
        return state.games.KnightTour.movablePositions
    })

    const dispatch = useDispatch();

    const drawBoard = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.clearBoard(canvas);
        boardFactory.getChessBoard(ctx, DEFAULT_SUDOKU_BOARD_CELL);

        canvasService.fillCell(ctx, knightPosition, 'Aqua');
        canvasService.fillCell(ctx, pickingPosition, 'Aquamarine');
        canvasService.drawCellValue(ctx, knightPosition, knightValue);
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
                dispatch({
                    type: KnightTourAction.updateMovablePositions,
                    payload: knightTourService.findMovablePositions(knightPosition, DEFAULT_KNIGHT_TOUR_CELL, [xy])
                })
                dispatch({
                    type: KnightTourAction.updatePickingPosition,
                    payload: xy
                })
            }
        })
    }

    const handleKeyDown = (event) => {
        const key = Number(event.key);
        if (event.key === 'Backspace') {
            dispatch({
                type: KnightTourAction.updateTypingValue,
                payload: (typingValue + '').slice(0, -1)
            })
        }
        if (!isNaN(key) && event.key != null && event.key !== ' ') {
            // Limit only 3 digits
            if (pickingPosition != null && typingValue < 100) {
                dispatch({
                    type: KnightTourAction.updateTypingValue,
                    payload: (typingValue == null ? "" : typingValue) + "" + key
                })
            }
        }

    }

    useEffect((
        drawBoard
    ), [knightPosition, knightValue, movablePositions, pickingPosition, typingValue]);

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