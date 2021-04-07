import React from "react";
import KnightTourBox from "./KnightTourBox";
import {Button, Col, Container, Row} from "react-bootstrap";
import KnightTourPG from "./KnightTourPG";
import {useSelector} from "react-redux";
import LevelBox from "../../component/LevelBox";

export default function KnightTour() {
    const level = useSelector(state => {
        return state.games.KnightTour.level;
    })

    return (
        <Container>
            <Row>
                <LevelBox/>
            </Row>
            <Row className="justify-content-around">
                <Col>
                    <KnightTourPG level={level}/>
                </Col>
                <Col>
                    <Button>Open Board</Button>
                    <br/><br/><br/><br/><br/>
                    <Button>Right -></Button>
                </Col>
                <Col>
                    <KnightTourBox level={level}/>
                </Col>
            </Row>
        </Container>
    )
}