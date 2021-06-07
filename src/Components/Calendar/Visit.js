import {Card} from "react-bootstrap";

export function Visit({visit}) {
    return (
        <Card className={"alert-primary"} style={{ width: '12rem', maxHeight: '7rem'}}>
            <Card.Body>
                <Card.Title>{visit.petName} {visit.petSpecies}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{new Date(visit.beginTime).getHours()} - {new Date(visit.endTime).getHours()}</Card.Subtitle>
                <Card.Text>
                    {visit.vetFirstName} {visit.vetSurname}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}