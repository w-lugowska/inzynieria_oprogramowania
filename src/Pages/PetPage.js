import {Button, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

export function PetPage() {
    //todo strona do zarządzania zwierzętami klienta, dodawania nowych, wyboru zwierzaków do wizyty
    // na razie były tu testy łączenia się z backendem
    const [pets, setPets] = useState([]);

    useEffect(() => {
        async function fetchAPI() {
            let response = await fetch("https://petclinicio.herokuapp.com/owners");
            setPets(await response.json());
            console.log(pets)
        }
        fetchAPI();
    }, []);

    return(
        <Container style={{marginTop: 300}}>
            {pets.map( pet =>
                <Row style={{alignItems:"center", display:"flex", justifyContent: "center", height:100}}>
                    <h1>{pet.firstname} {pet.surname}</h1>
                </Row>
            )}
            {/*<Button onClick={() => fetch("https://petclinicio.herokuapp.com/owners/create-owner?firstName=kurwa&surname=mać", {*/}
            {/*    method: 'POST'*/}
            {/*})} > siusiak</Button>*/}
        </Container>
    );
}