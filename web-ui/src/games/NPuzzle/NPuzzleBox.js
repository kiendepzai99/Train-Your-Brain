import React, {useCallback} from "react";
import {Button, Col, Container, Dropdown, Row} from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import GameLevel from "../../constants/GameLevel";
import {useDispatch, useSelector} from "react-redux";
import NPuzzleAction from "../../store/action/NPuzzleAction";
import {mockNPuzzleBoard, mockNPuzzleBoardGoal} from "../../mockData";

export default function NPuzzleBox(props) {
    const level = useSelector(state => {
        return state.games.NPuzzle.level
    })

    const moveLeft = useSelector(state => {
        return state.games.NPuzzle.moveLeft
    })

    const moveAllowed = useSelector(state => {
        return state.games.NPuzzle.moveAllowed
    })

    const boardStatus = useSelector(state => {
        return state.games.NPuzzle.boardStatus
    })

    const boardGoal = useSelector(state => {
        return state.games.NPuzzle.boardGoal
    })

    const dispatch = useDispatch();

    const handleLevelChange = (event) => {
        const newLevel = event.target.innerText
        if (newLevel !== level) {
            let cellNumber;
            if (newLevel === GameLevel.EASY) cellNumber = 3;
            else if (newLevel === GameLevel.MEDIUM) cellNumber = 4;
            else if (newLevel === GameLevel.HARD) cellNumber = 6;
            else cellNumber = 8;

            const action = {
                type: NPuzzleAction.changeLevel,
                payload: {
                    level: level,
                    cellNumber: cellNumber,
                    boardGoal: mockNPuzzleBoardGoal(cellNumber),
                    boardStatusInit: mockNPuzzleBoard(cellNumber),
                    boardStatus: mockNPuzzleBoard(cellNumber),
                    moveAllowed: 10,
                    moveLeft: 10
                }
            }
            dispatch(action)
        }
    }

    const handleNewGame = () => {
        // TODO: Update new Game
        const action = {
            type: NPuzzleAction.newGame,
            payload: {
                level: level,
                cellNumber: 3,
                boardGoal: mockNPuzzleBoardGoal(3),
                boardStatusInit: mockNPuzzleBoard(3),
                boardStatus: mockNPuzzleBoard(3),
                moveAllowed: 100,
                moveLeft: 100
            }
        }
        dispatch(action)
    }

    const handleResetGame = () => {
        const action = {
            type: NPuzzleAction.resetGame
        }
        dispatch(action)
    }

    const getGameResult = () => {
        let valid = true;
        boardStatus.forEach((row, i) => {
            row.forEach((item, j) => {
                if (item !== boardGoal[i][j]) {
                    valid = false;
                }
            })
        })
        if (valid) {
            return "You Win"
        } else return "You Lose"
    }

    return (
        <Container fluid>
            <Row className="justify-content-between">
                <Col sm={8} className="text-left">
                    <Button variant="success" className="m-2" onClick={handleResetGame}>Reset</Button>
                    <Button variant="info" className="m-2" onClick={handleNewGame}>New Game</Button>
                </Col>
                <Col sm={4} className="text-right">
                    <DropdownButton id="level-dropdown" variant="light" title={level} className="m-2">
                        <Dropdown.Item onClick={handleLevelChange}>{GameLevel.EASY}</Dropdown.Item>
                        <Dropdown.Item onClick={handleLevelChange}>{GameLevel.MEDIUM}</Dropdown.Item>
                        <Dropdown.Item onClick={handleLevelChange}>{GameLevel.HARD}</Dropdown.Item>
                        <Dropdown.Item onClick={handleLevelChange}>{GameLevel.EXPERT}</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="border text-center">
                    <div>Target image here</div>
                    <br/><br/><br/><br/><br/><br/>
                </Col>
            </Row>
            {moveLeft !== 0 ?
                <Row className="justify-content-center">
                    <Col className="text-center border">
                        <h3><code>move allowed</code></h3>
                        <h3><code>{moveAllowed}</code></h3>
                    </Col>
                    <Col className="text-center border">
                        <h3><code>move left</code></h3>
                        <h3><code>{moveLeft}</code></h3>
                    </Col>
                </Row>
                : <Row className={"justify-content-center mt-5"}>
                    <Col>
                        <h3 className={"entry-title text-center"}>{getGameResult()}</h3>
                    </Col>
                </Row>
            }
        </Container>
    )
}