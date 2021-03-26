import {Col, Container, PageItem, Row, Table} from "react-bootstrap";
import HonorTable from "./HonorTable";

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