import { Container, Row } from "react-bootstrap";

export function PlaceHolderPage({ text }) {
  return (
    <Container>
      <Row
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: 900,
        }}
      >
        <h1>{text}</h1>
      </Row>
    </Container>
  );
}
