import React from "react";
import KnightTourBox from "./KightTourBox";
import GameLevel from "../../constants/GameLevel";
import {Col, Container, Form, Row} from "react-bootstrap";

export default function KnightTour() {
    const [gameLevel, setGameLevel] = React.useState(GameLevel.EASY);

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
                    <KnightTourBox level={gameLevel}/>
                </Col>
            </Row>
        </Container>
    )
}