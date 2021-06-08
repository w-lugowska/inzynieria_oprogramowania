import { Visit } from "./Visit";
import { Button, OverlayTrigger, Popover, Row } from "react-bootstrap";
import { VisitForm } from "./VisitForm";

export function Day({ date, visits, setShouldReload }) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">stwórz wizytę</Popover.Title>
      <Popover.Content>
        <VisitForm date={date} setShouldReload={setShouldReload} />
      </Popover.Content>
    </Popover>
  );
  return (
    <div style={{ minHeight: "8rem", width: "15rem" }}>
      <Row>
        <h3 className={"ml-3"}>{date.getDate()}</h3>
        {localStorage.getItem("type") === "vet" ? (
          <OverlayTrigger trigger={"click"} overlay={popover}>
            <Button className={"ml-2 mb-2"}>Stwórz wizytę</Button>
          </OverlayTrigger>
        ) : null}
      </Row>
      {visits.map((visit) => (
        <Visit visit={visit} setShouldReload={setShouldReload} />
      ))}
    </div>
  );
}
