import {Form} from "react-bootstrap";

export function VisitForm() {
    return (
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>wprowadź początek wizyty</Form.Label>
                <Form.Control type="email" placeholder="godzina rozpoczęcia" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>wprowadź koniec wizyty</Form.Label>
                <Form.Control type="password" placeholder="godzina zakończenia" />
            </Form.Group>
        </Form>
    );
}