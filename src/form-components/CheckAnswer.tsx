import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //This is the State
    const [answer, setUserAnswer] = useState<string>("");

    //This is the control creating the text box
    function inputAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        //Setting the State Changing Function to event.target.value
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="answerBox">
                <Form.Label>User Answer:</Form.Label>
                <Form.Control value={answer} onChange={inputAnswer} />
            </Form.Group>
            <div>
                {answer === expectedAnswer ? (
                    <span>correct: ✔️ </span>
                ) : (
                    <span>correct: ❌</span>
                )}
            </div>
        </div>
    );
}
