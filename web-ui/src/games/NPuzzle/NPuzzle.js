import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import NPuzzlePG from "./NPuzzlePG";
import NPuzzleBox from "./NPuzzleBox";
import NPuzzleInfo from "./NPuzzleInfo";
import Header from "../../component/Header";

export default function NPuzzle() {
    return (
        <Container fluid>
            <Header/>
            <Row className="mt-4">
                <Container>
                    <Row className="justify-content-around">
                        <Col>
                            <NPuzzlePG/>
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