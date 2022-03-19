import React from "react";

export function Quizzer(): JSX.Element {
    const tasks: string[] = ["Sketch,"];
    return (
        <div>
            <h3>Quizzer</h3>
            <div>
                <img
                    src={
                        "/Users/marvindang/CISC275_tasks/src/quizzer/IMG_6120.HEIC"
                    }
                    alt="Quizzer"
                />
            </div>
            <div>
                <ul>
                    {tasks.map((name: string) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
