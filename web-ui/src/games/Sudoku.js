import {Col, Container, Row} from "react-bootstrap";
import SudokuBox from "./SudokuBox";
import React from "react";
import LevelBox from "../component/LevelBox";
import {useSelector} from "react-redux";

export default function Sudoku() {
    const level = useSelector(state => {
        return state.games.KnightTour.level;
    })

    return (
        <Container>
            <Row>
                <LevelBox/>
            </Row>
            <Row>
                <Col>
                    <SudokuBox level={level}/>
                </Col>
            </Row>
        </Container>
    )
}