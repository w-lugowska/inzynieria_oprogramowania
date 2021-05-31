import {Bar} from "./Components/Bar";
import {BrowserRouter, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import {PlaceHolderPage} from "./Pages/PlaceHolderPage";

function App() {
  return (
      <BrowserRouter>
          <Bar/>
          <Switch>
              <Route path={"/d"}>
                  <PlaceHolderPage text="piewsza strona"/>
              </Route>
              <Route path={"/c"}>
                  <PlaceHolderPage text="druga strona"/>
              </Route>
              <Route path={"/b"}>
                  <PlaceHolderPage text="trzecia strona"/>
              </Route>
              <Route path={"/a"}>
                  <PlaceHolderPage text="czwarta strona"/>
              </Route>
              <Route path-={"/"}>
                  <PlaceHolderPage text={"strona główna"}/>
              </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
