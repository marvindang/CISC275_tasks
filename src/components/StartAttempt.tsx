import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //number of attempts
    const [currentAttempt, setAttempt] = useState<number>(4);
    //progress or not
    const [currentProgress, setProgress] = useState<boolean>(false);
    //Attempts state Changing Function
    function startQuiz(): void {
        setAttempt(currentAttempt - 1);
        setProgress(true);
    }
    //Muligan Changing Function
    function mulliganChangeAttempts(): void {
        setAttempt(currentAttempt + 1);
    }
    //Prgress State Chanign Function
    function stopQuiz(): void {
        setProgress(false);
    }
    return (
        <div>
            <span>setAttempt{currentAttempt}</span>
            <Button
                disabled={currentAttempt === 0 || currentProgress === true}
                onClick={startQuiz}
            >
                Start Quiz
            </Button>
            <Button disabled={currentProgress === false} onClick={stopQuiz}>
                Stop Quiz
            </Button>
            <Button
                disabled={currentProgress === true}
                onClick={mulliganChangeAttempts}
            >
                Mulligan
            </Button>
        </div>
    );
}
