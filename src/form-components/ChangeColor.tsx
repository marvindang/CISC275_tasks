import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "black",
    "white"
];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setNewColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>The current color is:{"  "}</div>
            <span
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                <span>{chosenColor}</span>
            </span>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setNewColor(event.target.value)}
                        id={"colors-choice-" + color}
                        label={color}
                        value={color}
                        checked={chosenColor === color}
                    />
                ))}
            </div>
        </div>
    );
}
