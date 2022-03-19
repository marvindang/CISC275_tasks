import React from "react";

export function Quizzer(): JSX.Element {
    const tasks: string[] = ["Sketch,"];
    return (
        <div>
            <h4>Quizzer</h4>
            <div>
                <img
                    src={
                        "/Users/marvindang/CISC275_tasks/src/quizzer/IMG_6120.HEIC"
                    }
                    alt="Quizzer"
                />
            </div>
            <h3>Quiz Question</h3>
            <h2>Select Question Below</h2>
            <div>
                Tasks list:
                <ul>
                    {tasks.map((name: string) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
