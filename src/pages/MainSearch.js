import { Form, Button, Container } from 'react-bootstrap';
import '../css/navbar.css';
import '../css/searchForm.css';

export default function MainSearch() {
    return (
        <>
            <Container id="container1" fluid="md">
                <h1>WE KNOW <strong>EXAM </strong>REQUIREMENTS</h1>
                <h2>and so we have made search easy</h2>
            </Container>
            <Container id="container2" className="fluid">
                <Form>
                    <Form.Group className="mb-3" controlId="formGridState">
                        <Form.Label>College</Form.Label>
                        <Form.Select defaultValue="🎓">
                            <option>🎓</option>
                            <option>MNNIT Allahabad</option>
                            <option>IIIT Allahabad</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridState">
                        <Form.Label>Semester</Form.Label>
                        <Form.Select defaultValue="🔢">
                            <option>🔢</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridState">
                        <Form.Label>Branch</Form.Label>
                        <Form.Select defaultValue="⚙️">
                            <option>⚙️</option>
                            <option>Biotechnology</option>
                            <option>Chemical</option>
                            <option>Civil</option>
                            <option>Computer Science</option>
                            <option>Electrical</option>
                            <option>Electronics & Communication</option>
                            <option>Mechanical</option>
                            <option>Production & Industrial</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridState">
                        <Form.Label>Subject</Form.Label>
                        <Form.Select defaultValue="📚">
                            <option>📚</option>
                            <option>Electrical Machine</option>
                            <option>DSA</option>
                        </Form.Select>
                    </Form.Group>
                    <Button id="btn" className="mb-3" variant="primary" type="submit">
                        Now,help me
                    </Button>
                </Form>
            </Container>
        </>
    )
}