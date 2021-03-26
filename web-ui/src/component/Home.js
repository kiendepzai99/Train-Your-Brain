import {useEffect, useState} from "react";
import {mockGames} from "../mockData";
import {Col, Container, Row} from "react-bootstrap";
import GameBox from "./GameBox";

export default function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // CAll Apis
        setGames(mockGames);
    }, [])

    return (
        <Container fluid={"md"}>
            <Row className={"align-items-center"}>
                {games.map(game => {
                    return (
                        <Col sm={6} md={5} lg={4} key={game.textId}>
                            <GameBox gameInfo={game}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}