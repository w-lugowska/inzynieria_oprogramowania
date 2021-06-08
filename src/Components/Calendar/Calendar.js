import { CustomTable } from "./CustomTable";
import { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Day } from "./Day";

export function Calendar() {
  const [activeDate, setActiveDate] = useState(new Date());
  const [visits, setVisits] = useState([]);
  const [shouldReload, setShouldReload] = useState(0);
  useEffect(() => {
    localStorage.setItem("id", 8);
    localStorage.setItem("petId", 5);
    localStorage.setItem("type", "vet");

    async function init() {
      let response;
      if (localStorage.getItem("type") === "vet") {
        response = await fetch(
          `https://petclinicio.herokuapp.com/vets/${localStorage.getItem(
            "id"
          )}/visits`
        );
      } else {
        response = await fetch(`https://petclinicio.herokuapp.com/visits`);
      }
      let json = await response.json();
      setVisits(json);
    }

    init();
  }, [activeDate, shouldReload]);

  function createWeeks(visits) {
    let numbers = [
      ...Array(
        new Date(
          activeDate.getFullYear(),
          activeDate.getMonth() + 1,
          0
        ).getDate()
      ).keys(),
    ];
    let days = numbers.map((number) => (
      <Day
        date={
          new Date(activeDate.getFullYear(), activeDate.getMonth(), number + 1)
        }
        visits={visits.filter(
          (visit) =>
            new Date(visit.beginTime).getDate() === number + 1 &&
            new Date(visit.beginTime).getMonth() === activeDate.getMonth() &&
            new Date(visit.beginTime).getFullYear() === activeDate.getFullYear()
        )}
        setShouldReload={setShouldReload}
      />
    ));

    for (
      let i = 0;
      i < new Date(activeDate.getFullYear(), activeDate.getMonth(), 1).getDay();
      i++
    ) {
      days.unshift(" ");
    }

    while (days.length < 35) {
      days.push(" ");
    }
    let weeks = [];
    while (days.length > 7) {
      weeks.push(days.splice(0, 7));
    }
    weeks.push(days);
    return weeks;
  }

  const months = [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień",
  ];

  const daysOfTheWeek = [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
  ];

  return (
    <div style={{ marginTop: 10, marginRight: 35 }}>
      <Row
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant={"dark"}
          onClick={() =>
            setActiveDate(
              new Date(activeDate.getFullYear(), activeDate.getMonth() - 1, 1)
            )
          }
        >
          poprzedni
        </Button>
        <h2 className={"m-2"}>
          {months[activeDate.getMonth()]} {activeDate.getFullYear()}
        </h2>
        <Button
          variant={"dark"}
          onClick={() =>
            setActiveDate(
              new Date(activeDate.getFullYear(), activeDate.getMonth() + 1, 1)
            )
          }
        >
          następny
        </Button>
      </Row>
      <CustomTable head={daysOfTheWeek} data={createWeeks(visits)} />
    </div>
  );
}
