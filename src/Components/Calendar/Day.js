import {Visit} from "./Visit";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";
import {VisitForm} from "./VisitForm";

export function Day({number, visits}) {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">stwórz wizytę</Popover.Title>
            <Popover.Content>
               <VisitForm/>
            </Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger trigger={"click"} overlay={popover}>
            <div style={{height: '8rem', width:'15rem'}}>
                {/*<Button style={{position: "absolute", marginLeft: 0, marginTop: 97}}>Stwórz wizytę</Button>*/}
                <h3 style={{position: "absolute", marginLeft: 210, marginTop: 100}}>{number}</h3>
                {visits.map(visit => <Visit visit={visit}/>)}
            </div>
        </OverlayTrigger>
);
}