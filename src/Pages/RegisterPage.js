import { PlaceHolderPage } from "./PlaceHolderPage";
import { useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

export function RegisterPage() {
  const [password, setPassword] = useState();
  const [repeatedPassword, setRepeatedPassword] = useState();
  const [username, setUsername] = useState();
  const [notCorrect, setNotCorrect] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  return (
    <div>
      <Container style={{ padding: 350 }}>
        <Form>
          <FormGroup>
            <h2 style={{ textAlign: "center" }}>zarejestruj się</h2>
            <Form.Control
              className={"mt-2"}
              placeholder="wprowadź login"
              value={username}
              onChange={(text) => setUsername(text.target.value)}
            />
            <Form.Control
              type="password"
              className={"mt-2"}
              placeholder="wprowadź hasło"
              value={password}
              onChange={(text) => setPassword(text.target.value)}
            />
            <Form.Control
              type={"password"}
              className={"mt-2"}
              placeholder="powtórz hasło"
              value={username}
              onChange={(text) => setRepeatedPassword(text.target.value)}
            />
            {notCorrect ? (
              <Form.Text style={{ color: "red" }}>
                wprowadzono niepoprawne dane logowania
              </Form.Text>
            ) : null}
            <Button
              style={{ width: 440 }}
              variant={"danger"}
              className={"mt-2"}
              // onClick={() => {login(username, password).then(response => setShouldRedirect(true)).catch(() => setNotCorrect(true)); setUsername(""); setPassword("")}}
            >
              Zatwierdź
            </Button>
            <Link to={"/login"}>
              <Button
                style={{ width: 440 }}
                variant={"outline-dark"}
                className={"mt-2"}
              >
                zaloguj się
              </Button>
            </Link>
            {shouldRedirect ? <Redirect to={"/"} /> : null}
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}
