import React from "react";
import KnightTourBox from "./KightTourBox";
import GameLevel from "../../constants/GameLevel";
import {Container, FormGroup, Row, Col} from "react-bootstrap";

export default function KnightTour() {
    return (
        <Container>
            <Row>
                <Col>
                    <FormGroup>

                    </FormGroup>
                    <KnightTourBox level={GameLevel.EASY}/>
                </Col>
            </Row>
        </Container>
    )
}