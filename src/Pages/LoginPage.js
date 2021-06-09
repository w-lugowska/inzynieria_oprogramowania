import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../utils/Authorization";

export function LoginPage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [notCorrect, setNotCorrect] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  return (
    <div>
      <Container style={{ padding: 350 }}>
        <Form>
          <FormGroup>
            <h2 style={{ textAlign: "center" }}>zaloguj się</h2>
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
            {notCorrect ? (
              <Form.Text style={{ color: "red" }}>
                wprowadzono niepoprawne dane logowania
              </Form.Text>
            ) : null}
            <Button
              style={{ width: 440 }}
              variant={"success"}
              className={"mt-2"}
              disabled={username === "" || password === ""}
              onClick={() => {
                login(username, password)
                  .then((response) => setShouldRedirect(true))
                  .catch(() => setNotCorrect(true));
                setUsername("");
                setPassword("");
              }}
            >
              Zatwierdź
            </Button>
            <Link to={"/register"}>
              <Button
                style={{ width: 440 }}
                variant={"outline-dark"}
                className={"mt-2"}
              >
                zarejestruj się
              </Button>
            </Link>
            {shouldRedirect ? <Redirect to={"/home"} /> : null}
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}
