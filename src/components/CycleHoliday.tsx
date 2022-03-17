import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "CHR" | "HAL" | "NYD" | "EAS" | "VAL";

const aOrder: Record<Holidays, Holidays> = {
    CHR: "EAS",
    EAS: "HAL",
    HAL: "NYD",
    NYD: "VAL",
    VAL: "CHR"
};

const nOrder: Record<Holidays, Holidays> = {
    VAL: "EAS",
    EAS: "HAL",
    HAL: "CHR",
    CHR: "NYD",
    NYD: "VAL"
};
export function CycleHoliday(): JSX.Element {
    const [Holidays, setHolidays] = useState<Holidays>("CHR");
    //function by year greater
    function byYear(): void {
        setHolidays(nOrder[Holidays]);
    }
    //function by alpha
    function byAlpha(): void {
        setHolidays(aOrder[Holidays]);
    }

    return (
        <div>
            <Button onClick={byYear}>Advance by Alphabet</Button>
            <Button onClick={byAlpha}>Advance by Year</Button>
            <div>
                {Holidays === "CHR" ? (
                    <span>Holiday: 🎄</span>
                ) : Holidays === "HAL" ? (
                    <span>Holiday: 🎃</span>
                ) : Holidays === "NYD" ? (
                    <span>Holiday:🎉</span>
                ) : Holidays === "EAS" ? (
                    <span>Holiday: 🐰</span>
                ) : Holidays === "VAL" ? (
                    <span>Holiday:💝</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
