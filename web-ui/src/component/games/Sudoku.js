import {Col, Container, Form, Row} from "react-bootstrap";
import SudokuBox from "./SudokuBox";
import GameLevel from "../../constants/GameLevel";
import React from "react";

export default function Sudoku() {
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Level
                            </Form.Label>
                            <Form.Control as="select">
                                <option>{GameLevel.EASY}</option>
                                <option>{GameLevel.MEDIUM}</option>
                                <option>{GameLevel.HARD}</option>
                                <option>{GameLevel.EXPERT}</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <SudokuBox level={GameLevel.EASY}/>
                </Col>
            </Row>
        </Container>
    )
}