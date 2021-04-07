import React, {useState} from "react";
import KnightTourBox from "./KnightTourBox";
import {Button, Col, Container, Row} from "react-bootstrap";
import KnightTourPG from "./KnightTourPG";
import {useDispatch, useSelector} from "react-redux";
import LevelBox from "../../component/LevelBox";
import KnightTourAction from "../../store/action/KnightTourAction";
import knightTourService from "../../service/KnightTourService";
import {DEFAULT_KNIGHT_TOUR_CELL} from "../../constants/BoardConstants";
import Position from "../../utils/Position";

export default function KnightTour() {
    // Stored state
    const level = useSelector(state => {
        return state.games.KnightTour.level;
    })

    const boardStatus = useSelector(state => {
        return state.games.KnightTour.boardStatus;
    })
    const pickingPosition = useSelector(state => {
        return state.games.KnightTour.pickingPosition;
    })
    const typingValue = useSelector(state => {
        return state.games.KnightTour.typingValue;
    })

    // Local state
    const [boardVisible, setBoardVisible] = useState(true);

    const dispatch = useDispatch();

    const handleCommit = () => {
        dispatch({
            type: KnightTourAction.updateKnightPosition,
            payload: pickingPosition
        })
        dispatch({
            type: KnightTourAction.updateMovablePositions,
            payload: knightTourService.findMovablePositions(pickingPosition, DEFAULT_KNIGHT_TOUR_CELL)
        })
        dispatch({
            type: KnightTourAction.updateTypingValue,
            payload: null
        })
        const newBoardStatus = [...boardStatus];
        newBoardStatus.forEach((row, i) => {
            row.forEach((item, j) => {
                if (pickingPosition.compareTo(new Position(i, j))) {
                    newBoardStatus[i][j] = typingValue;
                }
            })
        })
        dispatch({
            type: KnightTourAction.updateBoardStatus,
            payload: newBoardStatus
        })
    }

    const handleShowBoard = () => {
        setBoardVisible(!boardVisible);
    }

    return (
        <Container>
            <Row>
                <LevelBox/>
            </Row>
            <Row className="justify-content-around">
                <Col>
                    <KnightTourPG level={level}/>
                </Col>
                <Col>
                    <Button onClick={handleCommit}>Commit</Button>
                    <br/><br/><br/><br/><br/>
                    <Button onClick={handleShowBoard}>{boardVisible ? 'Close Board' : 'Open Board'}</Button>
                </Col>
                <Col>
                    <KnightTourBox visible={boardVisible} boardStatus={boardStatus}/>
                </Col>
            </Row>
        </Container>
    )
}