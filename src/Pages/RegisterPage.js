import { useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { register } from "../utils/Authorization";

export function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [vetCode, setVetCode] = useState("");
  const [notCorrectMessage, setNotCorrectMessage] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  return (
    <div>
      <Container style={{ padding: 300 }}>
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
              value={repeatedPassword}
              onChange={(text) => setRepeatedPassword(text.target.value)}
            />
            {password !== repeatedPassword ? (
              <Form.Text style={{ color: "red" }}>
                podane hasła nie są identyczne
              </Form.Text>
            ) : null}
            <Form.Control
              type={"text"}
              className={"mt-2"}
              placeholder="imię"
              value={firstName}
              onChange={(text) => setFirstName(text.target.value)}
            />
            <Form.Control
              type={"text"}
              className={"mt-2"}
              placeholder="nazwisko"
              value={surName}
              onChange={(text) => setSurName(text.target.value)}
            />
            <Form.Control
              type={"text"}
              className={"mt-5"}
              placeholder="kod dostępu dla weterynarza"
              value={vetCode}
              onChange={(text) => setVetCode(text.target.value)}
            />
            <Form.Text>*wypełnia tylko weterynarz</Form.Text>
            <Form.Text style={{ color: "red" }}>{notCorrectMessage}</Form.Text>
            <Button
              style={{ width: 540 }}
              variant={"danger"}
              className={"mt-2"}
              disabled={
                !(password === repeatedPassword) ||
                username === "" ||
                firstName === "" ||
                surName === ""
              }
              onClick={() => {
                register(username, password, firstName, surName, vetCode).then(
                  (response) => {
                    if (response.status === 500) {
                      setNotCorrectMessage(
                        "nieznany błąd serwera, spróbuj ponownie"
                      );
                    } else if (response.status === 520) {
                      setNotCorrectMessage("błędny kod weterynarza");
                    } else if (response.status === 521) {
                      setNotCorrectMessage("1 on się nie zdarzy w sumie");
                    } else if (response.status === 522) {
                      setNotCorrectMessage("2 on się nie zdarzy w sumie");
                    } else if (response.status === 523) {
                      setNotCorrectMessage("nazwa użytkownika zajęta");
                    }
                  }
                );
              }}
            >
              Zatwierdź
            </Button>
            <Link to={"/login"}>
              <Button
                style={{ width: 540 }}
                variant={"outline-dark"}
                className={"mt-2"}
              >
                zaloguj się
              </Button>
            </Link>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}
