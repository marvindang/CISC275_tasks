import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    //const[state, useState]= useState < type> (intial value)
    const [currentType, setType] = useState<QuestionType>(
        "short_answer_question"
    );
    //function changeQuestion type
    function changeQuestionType(): void {
        setType(
            //tertiary operator for Changing the Question Type
            currentType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            <div>
                {/* Tertiary conditionaly using <span></span> for displaying text*/}
                {currentType === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span>Multiple Choice</span>
                )}
            </div>
        </div>
    );
}
