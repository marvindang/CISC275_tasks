import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    //state representing the number of attempts the user has left
    const [attempt, setLeft] = useState<number>(3);
    //state representing the number requested
    const [requested, updatedRequested] = useState<string>("0");

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attempt}</p>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Number of Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        updatedRequested(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setLeft(attempt - 1)}
                    disabled={attempt <= 0 ? true : false}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setLeft(parseInt(requested) + attempt || attempt)
                    }
                >
                    gain
                </Button>
            </div>
        </div>
    );
}
