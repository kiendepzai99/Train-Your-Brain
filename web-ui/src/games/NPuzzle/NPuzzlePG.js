import React, {useCallback, useEffect, useRef} from "react";
import boardFactory from "../../service/BoardFactory";
import {DEFAULT_BOARD_SIZE} from "../../constants/BoardConstants";
import nPuzzleService from "../../service/NPuzzleService";
import Position from "../../utils/Position";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import NPuzzleAction from "../../store/action/NPuzzleAction";

export default function NPuzzlePG(props) {
    const dispatch = useDispatch();
    const canvasRef = useRef();
    const boardSize = DEFAULT_BOARD_SIZE;

    const cellNumber = useSelector(state => {
        return state.games.NPuzzle.cellNumber
    })
    const boardStatus = useSelector(state => {
        return state.games.NPuzzle.boardStatus
    })

    const moveLeft = useSelector(state => {
        return state.games.NPuzzle.moveLeft
    })

    const setBoardStatus = useCallback((boardStatus) => {
        const action = {
            type: NPuzzleAction.updateBoardStatus,
            payload: boardStatus
        }
        dispatch(action)
    }, [dispatch])
    const calculateCurrentHole = useCallback(() => {
        let result = null;
        boardStatus.forEach((row, i) => {
            if (result != null) return;
            row.forEach((item, j) => {
                if (item === 0) {
                    result = new Position(i, j);
                }
            })
        })
        return result;
    }, [boardStatus])
    const currentHole = calculateCurrentHole();

    const drawBoard = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.clearBoard(canvas);
        boardFactory.getChessBoard(ctx, cellNumber, boardSize);
        if (boardStatus != null) {
            nPuzzleService.drawBoardStatus(ctx, boardStatus, boardSize, cellNumber)
        }
    }, [boardSize, boardStatus, cellNumber])

    const handleMouseOver = () => {
        canvasRef.current.style.cursor = "pointer";
    }

    const updateState = (currentRow, currentCol, newRow, newCol) => {
        const newBoardStatus = [...boardStatus]
        newBoardStatus[currentRow][currentCol] = boardStatus[newRow][newCol]
        boardStatus[newRow][newCol] = 0;
        setBoardStatus(newBoardStatus)
    }

    const handleOnKeyDown = (event) => {
        const key = event.key;
        // Left
        if (key === 'a') {
            const currentRow = currentHole.row
            const currentCol = currentHole.col
            if (currentCol > 0) {
                updateState(currentRow, currentCol, currentRow, currentCol - 1)
            }
        }
        // Right
        if (key === 'd') {
            const currentRow = currentHole.row
            const currentCol = currentHole.col
            if (currentCol < cellNumber - 1) {
                updateState(currentRow, currentCol, currentRow, currentCol + 1)
            }
        }
        // Up
        if (key === 'w') {
            const currentRow = currentHole.row
            const currentCol = currentHole.col
            if (currentRow > 0) {
                updateState(currentRow, currentCol, currentRow - 1, currentCol)
            }
        }
        // Down
        if (key === 's') {
            const currentRow = currentHole.row
            const currentCol = currentHole.col
            if (currentRow < cellNumber - 1) {
                updateState(currentRow, currentCol, currentRow + 1, currentCol)
            }
        }
        if ('asdw'.includes(key)) {
            const action = {
                type: NPuzzleAction.updateMoveLeft,
                payload: moveLeft - 1
            }
            dispatch(action)
        }
    }

    useEffect(() => {
        drawBoard()

    }, [drawBoard])

    return (
        <Container>
            <Row>
                <Col>
                    <canvas ref={canvasRef}
                            className="border border-danger"
                            tabIndex="1"
                            width={boardSize}
                            height={boardSize}
                            onMouseOver={handleMouseOver}
                            onKeyDown={handleOnKeyDown}
                    />
                </Col>
            </Row>
        </Container>
    )
}