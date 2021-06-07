import {CustomTable} from "./CustomTable";
import {useEffect, useState} from "react";
import {Button, Row} from "react-bootstrap";
import {Day} from "./Day";

export function Calendar () {
    const [activeDate, setActiveDate] = useState(new Date());
    const [visits, setVisits] = useState([]);
    const [days, setDays] = useState([]);
    const [weeks, setWeeks] = useState([]);

    useEffect(() => {
        async function init() {
            let response = await fetch("https://petclinicio.herokuapp.com/visits");
            let json = await response.json();
            setVisits(json);
            let numbers = [...Array(new Date(activeDate.getFullYear(), activeDate.getMonth(), 0).getDate()).keys()];
            setDays(numbers.map(number =>
                <Day
                    number={number + 1}
                    visits={visits.filter(visit => new Date(visit.beginTime).getDate() === number + 1)}
                />)
            );

            for(let i = 0; i < new Date(activeDate.getFullYear(), activeDate.getMonth(), 1).getDay(); i++) {
                days.unshift(" ");
            }

            while (days.length < 35) {
                days.push(" ");
            }

            let weeks = [];
            while(days.length > 7) {
                weeks.push(days.splice(days.length - 7, 7));
            }
            weeks.push(days);
            weeks.reverse();
            setWeeks(weeks);
        }
        init();
    },[activeDate]);


    const months =
        ["styczeń",
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
        "grudzień"];

    const daysOfTheWeek =
        ["niedziela",
        "poniedziałek",
        "wtorek",
        "środa",
        "czwartek",
        "piątek",
        "sobota"];

    return(
        <div style={{marginTop:80, marginRight: 35}}>
            <Row>
                <h2>{months[activeDate.getMonth()]}</h2>
                <Button
                    variant={"dark"}
                    onClick={() => setActiveDate(new Date(activeDate.getFullYear(), activeDate.getMonth() - 1, 1))}
                >poprzedni
                </Button>
                <Button
                    variant={"dark"}
                    onClick={() => setActiveDate(new Date(activeDate.getFullYear(), activeDate.getMonth() + 1, 1))}
                >następny
                </Button>
            </Row>
            <CustomTable
                head={daysOfTheWeek}
                data={weeks}
            />
        </div>
    );
}