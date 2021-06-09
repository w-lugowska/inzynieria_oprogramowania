import { Button, Card } from "react-bootstrap";
import { sendRequestWithToken } from "../../utils/Authorization";

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
              sendRequestWithToken(
                `vets/${localStorage.getItem("id")}/visits/${
                  visit.visitId
                }/delete`,
                "DELETE"
              ).then((response) => {
                setShouldReload(Math.random());
                console.log("xd to działa");
              })
            }
            style={{ position: "absolute", marginTop: 46, marginLeft: 130 }}
          >
            x
          </Button>
        ) : visit.petName === null ? (
          <Button
            onClick={() =>
              sendRequestWithToken(
                `owners/${localStorage.getItem("id")}` +
                  `/pets/${localStorage.getItem("petId")}` +
                  `/visits/${visit.visitId}/assign`,
                "PUT"
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
