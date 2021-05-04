import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import NPuzzlePG from "./NPuzzlePG";
import NPuzzleBox from "./NPuzzleBox";
import NPuzzleInfo from "./NPuzzleInfo";

export default function NPuzzle() {
    return (
        <Container fluid>
            <Row className="justify-content-around border-bottom border-top p-2">
                <a className={"text-normal"} href={"/"}><h3 className="entry-title">BrainCamp</h3></a>
            </Row>
            <Row className="mt-4">
                <Container>
                    <Row className="justify-content-around ">
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