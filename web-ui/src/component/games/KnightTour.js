import React from "react";
import KnightTourBox from "./KnightTourBox";
import GameLevel from "../../constants/GameLevel";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import KnightTourPG from "./KnightTourPG";

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
                </Col>
            </Row>
            <Row className="justify-content-around">
                <Col>
                    <KnightTourPG level={gameLevel}/>
                </Col>
                <Col>
                    Xin chào các bạn nhỏ
                    <Button>Open Board</Button>
                </Col>
                <Col>
                    <KnightTourBox level={gameLevel}/>
                </Col>
            </Row>
        </Container>
    )
}