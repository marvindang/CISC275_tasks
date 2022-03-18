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
    "white"
];

export function ChangeColor(): JSX.Element {
    const [color, newColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>The current color is:{"  "}</div>
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                <span>{color}</span>
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
                        ) => newColor(event.target.value)}
                        id={"colors-choice-" + color}
                        label={color}
                        value={color}
                        checked={color === color}
                    />
                ))}
            </div>
        </div>
    );
}
