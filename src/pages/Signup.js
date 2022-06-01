import { Container, Form, Button, Row, Col } from "react-bootstrap";
import '../css/login.css';
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <>
            <Container fluid className="mt-5">
                <h1 className="text-center">Signup Form</h1>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form className="mt-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button id="signin" type="submit">
                                Submit
                            </Button>
                            <Link to="/signin"> <Button id="signin" className="mx-3">Sign In</Button></Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}