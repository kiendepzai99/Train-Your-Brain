import {Col, Container, Row} from "react-bootstrap";
import SudokuBox from "./SudokuBox";
import GameLevel from "../../constants/GameLevel";
import React from "react";

export default function Sudoku() {
    return (
        <Container>
            <Row>
                <Col>
                    <SudokuBox level={GameLevel.EASY}/>
                </Col>
            </Row>
        </Container>
    )
}