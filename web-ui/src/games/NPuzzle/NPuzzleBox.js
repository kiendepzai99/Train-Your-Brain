import React from "react";
import {Button, Col, Container, Dropdown, Row} from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import GameLevel from "../../constants/GameLevel";

export default function NPuzzleBox(props) {
    return (
        <Container fluid>
            <Row className="justify-content-between">
                <Col className="text-center">
                    <Button variant="success" className="m-2">Restart</Button>
                    <Button variant="info" className="m-2">New Game</Button>
                </Col>
                <Col className="text-right">
                    <DropdownButton id="level-dropdown" variant="light" title={GameLevel.HARD} className="m-2">
                        <Dropdown.Item onClick="">{GameLevel.EASY}</Dropdown.Item>
                        <Dropdown.Item>{GameLevel.MEDIUM}</Dropdown.Item>
                        <Dropdown.Item>{GameLevel.HARD}</Dropdown.Item>
                        <Dropdown.Item>{GameLevel.EXPERT}</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="border text-center">
                    <div>Target image here</div>
                    <br/><br/><br/><br/><br/><br/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center border">
                    <h3><code>move allowed</code></h3>
                    <h3><code>10</code></h3>
                </Col>
                <Col className="text-center border">
                    <h3><code>move left</code></h3>
                    <h3><code>5</code></h3>
                </Col>
            </Row>
            <Row className="mt-3 border">
                <Col>
                    <p>Guidelines here</p>
                    <p>Use <code>A</code>, <code>S</code>, <code>D</code>, <code>W</code> to move</p>
                </Col>
            </Row>
        </Container>
    )
}