import { PlaceHolderPage } from "./PlaceHolderPage";
import { Redirect } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      {localStorage.getItem("token") === null ? (
        <Redirect to={"/login"} />
      ) : null}
      <PlaceHolderPage text={"strona główna"} />
    </div>
  );
}
