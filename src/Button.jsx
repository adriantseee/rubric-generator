import './Editor.css'
import { useState, useTransition } from 'react';

function RubricButton({ rubric, setRubric }){
    function addToRubric(){
        if(rubric){
            console.log("add rubric")
            setRubric([...rubric, "hi"]);
        }
        else{
            console.log("add rubric")
            setRubric(["hi"]);
        }
    }

    function editTarget(){
        console.log("edit rubric")
    }

    return (
    <div className="button-container" onClick={addToRubric}>
        <img onClick={(event) =>
        {
            editTarget();
            event.stopPropagation();
        }
        } id="edit-rubric-button" src="edit.png" alt="edit-button"/>
        <h2 id="rubric-button">Reporting Category 1</h2>
    </div>
    )
}

export default RubricButton;