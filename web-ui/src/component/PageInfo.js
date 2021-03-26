import {Col, Container, Row} from "react-bootstrap";
import HonorTable from "./HonorTable";
import React from "react";

export default function PageInfo() {
    return (
        <Container fluid className={"border border-danger"}>
            <Row className={"vh-20 my-5 border border-primary"}>

            </Row>
            <Row>
                <Col>
                    <HonorTable/>
                </Col>
            </Row>
        </Container>
    )
}