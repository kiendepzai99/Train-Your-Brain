import {Col, Container, Row} from "react-bootstrap";
import LevelBox from "../../component/LevelBox";
import React from "react";
import NPuzzlePG from "./NPuzzlePG";
import NPuzzleBox from "./NPuzzleBox";
import {useSelector} from "react-redux";

export default function NPuzzle() {
    // Stored state
    const level = useSelector(state => {
        return state.games.KnightTour.level;
    })

    return (
        <Container fluid>
            <Row className="justify-content-around border-bottom border-top">
                <h2>BrainCamp</h2>
            </Row>
            <Row className="mt-4">
                <Container>
                    <Row className="justify-content-around ">
                        <Col>
                            <NPuzzlePG level={level}/>
                        </Col>
                        <Col>
                            <NPuzzleBox/>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}