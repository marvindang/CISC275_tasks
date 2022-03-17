import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    //useState for right die
    //intial values of the die cannot be the same
    const [leftDie, setLeftDie] = useState<number>(1);
    //useState for left die
    const [rightDie, setRightDie] = useState<number>(4);
    return (
        <div>
            <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>
            <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
            {/*if the states of both dies are equal lose
            {condition}<div></div>*/}
            {leftDie === 1 && rightDie === 1 && <div>Lose</div>}
            {leftDie !== 1 && rightDie !== 1 && rightDie === leftDie && (
                <div>Win</div>
            )}
            {/*data-test id do not have any functionality to the user only for testing*/}
            <span data-testid="left-die">setLeftDie{leftDie}</span>
            <span data-testid="right-die">setLeftDie{rightDie}</span>
        </div>
    );
}
