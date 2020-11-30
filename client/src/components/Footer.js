import React from "react";
import { Container, Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <div style="height: 200px;">
        <Container fluid={true}>
            <Row xs="3">
                <Col>
                Champions
                </Col>
                <Col>
                TFT
                </Col>
                <Col>
                Github
                </Col>
            </Row>
        </Container>
        <Container fluid={true}>
            <Row>
            <Col>{new Date().getFullYear} - Made by MT</Col>
            </Row>
        </Container>
        </div>
    );
}

export default Footer