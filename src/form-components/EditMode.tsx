import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    //when not in edit
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing: "
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
                {editMode && (
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                    />
                )}
            </div>
            <div>
                {editMode ? (
                    <div>
                        <Form.Group controlId="form">
                            <Form.Label>Enter name: </Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                        {isStudent
                            ? name + " is a student"
                            : name + " is not a student"}
                    </div>
                ) : (
                    <div>
                        {isStudent
                            ? name + " is a student"
                            : name + " is not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}
