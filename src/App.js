import {Bar} from "./Components/Bar";
import {BrowserRouter, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import {PlaceHolderPage} from "./Pages/PlaceHolderPage";
import {PetPage} from "./Pages/PetPage";
import {LoginPage} from "./Pages/LoginPage";
import {HomePage} from "./Pages/HomePage";
import {CalendarPage} from "./Pages/CalendarPage";
import {RegisterPage} from "./Pages/RegisterPage";

function App() {
  return (
      <BrowserRouter>
          <Bar/>
          <Switch>
              <Route path={"/login"}>
                <LoginPage/>
              </Route>
              <Route path={"/register"}>
                <RegisterPage/>
              </Route>
              <Route path={"/calendar"}>
                <CalendarPage/>
              </Route>
              <Route path={"/pet"}>
                  <PetPage/>
              </Route>
              <Route path={"/home"}>
                <HomePage/>
              </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
