import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import NPuzzlePG from "./NPuzzlePG";
import NPuzzleBox from "./NPuzzleBox";
import {useSelector} from "react-redux";
import NPuzzleInfo from "./NPuzzleInfo";

export default function NPuzzle(props) {

    // Stored state
    const level = useSelector(state => {
        return state.games.NPuzzle.level;
    })

    return (
        <Container fluid>
            <Row className="justify-content-around border-bottom border-top p-2">
                <h3 className="entry-title">BrainCamp</h3>
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
                    <Row className="mt-3">
                        <Col>
                            <NPuzzleInfo/>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}