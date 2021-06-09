import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { sendRequestWithToken } from "../utils/Authorization";

export function PetPage() {
  localStorage.setItem("id", "1");
  localStorage.setItem("type", "owner");
  localStorage.setItem("petId", "2");

  const [pets, setPets] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const ownerId = localStorage.getItem("id");

  useEffect(() => {
    async function fetchAPI() {
      let response = await sendRequestWithToken(`owners/${ownerId}/pets`);
      let json = await response.json();
      setPets(json);
    }
    fetchAPI();
  }, []);

  return (
    <Container style={{ marginTop: 50 }}>
      <h1> Twoje zwierzaki </h1>
      {pets.map((pet) => (
        <Button
          key={pet.name}
          style={{
            background: "none",
            color: "#266DD3",
            border: "none",
            alignItems: "left",
            display: "flex",
            justifyContent: "center",
            height: 50,
            marginBottom: 10,
          }}
        >
          <h2>
            {" "}
            {pet.name} {pet.species}{" "}
          </h2>
        </Button>
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
            window.location.reload();
          }}
        >
          Dodaj
        </Button>
      </Form>
    </Container>
  );
}
