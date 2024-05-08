import './Editor.css'
import { useState } from 'react';

function RubricButton(){
    const {emerging, setEmerging} = useState("EM placeholder");
    const {developing, setDeveloping} = useState("DE placeholder");
    const {exhbiting, setExhbiting} = useState("EX placeholder");
    const {exhbitingDepth, setExhbitingDepth} = useState("ED placeholder");
    function addToRubric(){
        console.log("add rubric")
    }

    function editTarget(){
        console.log("edit rubric")
    }

    return (
    <div className="button-container">
        <img onClick={editTarget} id="edit-rubric-button" src="edit.png" alt="edit-button"/>
        <h2 id="rubric-button" onClick={addToRubric}>Reporting Category 1</h2>
    </div>
    )
}

export default RubricButton;