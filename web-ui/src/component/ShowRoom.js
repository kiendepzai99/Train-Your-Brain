import {Col, Container, Row} from "react-bootstrap";
import GameBox from "./GameBox";
import React, {useEffect, useState} from "react";
import {mockGames} from "../mockData";

export default function ShowRoom() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // TODO: Call Apis
        setGames(mockGames());
    }, [])

    return (
        <Container fluid>
            <Row>
                {games.map(game => {
                    return (
                        <Col md={6} lg={5} xl={4} key={game.textId}>
                            <GameBox gameInfo={game}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}