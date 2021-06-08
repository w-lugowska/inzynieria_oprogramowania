import { Button, Card } from "react-bootstrap";

export function Visit({ visit, setShouldReload }) {
  return (
    <Card
      className={visit.petName === null ? "alert-primary" : "alert-danger"}
      style={{ width: "12rem", maxHeight: "7rem", marginBottom: 10 }}
    >
      <Card.Body>
        {localStorage.getItem("type") === "vet" ? (
          <Button
            onClick={() =>
              fetch(
                `https://petclinicio.herokuapp.com/vets/${localStorage.getItem(
                  "id"
                )}/visits/${visit.visitId}/delete`,
                { method: "DELETE" }
              ).then((response) => setShouldReload(Math.random()))
            }
            style={{ position: "absolute", marginTop: 46, marginLeft: 130 }}
          >
            x
          </Button>
        ) : visit.petName === null ? (
          <Button
            onClick={() =>
              fetch(
                `https://petclinicio.herokuapp.com/owners/${localStorage.getItem(
                  "id"
                )}/pets/${localStorage.getItem("petId")}/visits/${
                  visit.visitId
                }/assign`,
                { method: "PUT" }
              ).then((response) => setShouldReload(Math.random()))
            }
            style={{ position: "absolute", marginTop: 30, marginLeft: 90 }}
          >
            zapisz
          </Button>
        ) : null}
        <Card.Title>
          {visit.petName} {visit.petSpecies}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {new Date(visit.beginTime).getHours()}.
          {new Date(visit.beginTime).getMinutes()} -{" "}
          {new Date(visit.endTime).getHours()}.
          {new Date(visit.endTime).getMinutes()}
        </Card.Subtitle>
        <Card.Text>
          {visit.vetFirstName} {visit.vetSurname}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
