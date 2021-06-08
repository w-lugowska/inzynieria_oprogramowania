import { Button, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export function PetPage() {
  //TODO: strona do zarządzania zwierzętami klienta, dodawania nowych, wyboru zwierzaków do wizyty
  // na razie były tu testy łączenia się z backendem
  localStorage.setItem("id", "1");
  localStorage.setItem("type", "owner");

  const [pets, setPets] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const ownerId = localStorage.getItem("id");

  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch(
        `https://petclinicio.herokuapp.com/owners/${ownerId}/pets`
      );
      setPets(await response.json());
    }
    fetchAPI();
  }, []);

  return (
    <Container style={{ marginTop:50 }}>
      <h1> Twoje zwierzaki </h1>
      {pets.map((pet) => (
        <Row
          key={pet.name}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            height: 100,
          }}
        >
          <h2> {pet.name} {pet.species} </h2>
        </Row>
      ))}

      <h1> Dodaj nowego zwierzaka</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Imię zwierzaka</Form.Label>
          <Form.Control
            type="text"
            placeholder="Imię"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Gatunek</Form.Label>
          <Form.Control
            type="text"
            placeholder="Gatunek"
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            fetch(
              `https://petclinicio.herokuapp.com/owners/${ownerId}/pets/add?name=${name}&species=${species}`,
              {
                method: "POST",
              }
            );
          }}
        >
          Dodaj
        </Button>
      </Form>
    </Container>
  );
}
