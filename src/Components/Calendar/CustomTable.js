import {Table} from "react-bootstrap";
import {CustomRow} from "./CustomRow";

export function CustomTable({head, data, bottom = []}) {
    return (
        <Table variant={"dark"} hover striped bordered>
            <thead>
            <CustomRow
                elements={
                    head.map((header, index) =>
                        <label>
                            {header}
                        </label>)
                }

                isHead={true}/>
            </thead>
            <tbody>
            {data.map((row, index) => <CustomRow key={index} elements={row}/>)}
            <CustomRow elements={bottom} isHead={true}/>
            </tbody>
        </Table>
    );
}