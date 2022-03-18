import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { setDhValue } from "./DoubleHalfState";
//import { dhValue, setDhValue } from "./DoubleHalfState";
//deleted the import

//created an interface with the two attriubtes
interface numInt {
    dhValue: number;
    setDhValue: (dhValue: number) => void;
}

//passed in the arguments (the attriubtes from the interface)
//{attriubte1, attriubte2}: interfaceName
function Doubler({ dhValue, setDhValue }: numInt): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}
//passed in the arguments (the attriubtes from the interface)
//{attriubte1, attriubte2}: interfaceName
function Halver({ dhValue, setDhValue }: numInt): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    //useState function
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            {/* passed in the attributes*/}
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
