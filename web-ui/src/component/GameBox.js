import {Card} from "react-bootstrap";
import React from "react";

function GameBox(props) {
    const gameInfo = props.gameInfo;
    return (
        <Card className={"mt-5"}>
            <Card.Header>{gameInfo.name}</Card.Header>
            <Card.Body>
                <h1>{gameInfo.avatar}</h1>
            </Card.Body>
            <Card.Footer className={"align-items-end"}>
                <a href={"/" + gameInfo.textId}><small className={"float-right"}>Train now -></small></a>
            </Card.Footer>
        </Card>
    )
}

export default GameBox;