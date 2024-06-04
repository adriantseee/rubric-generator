import './Editor.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LearningTarget from './LearningTarget';

function RubricButton({ rubric, setRubric, exportRubric, setExportRubric, isAdd, name, em_criteria, de_criteria, ex_criteria, ed_criteria, id}){
    const navigate = useNavigate();
    function addToRubric(){
        if(rubric){
            console.log("add rubric");
            for(var i = 0; i < exportRubric.length; i++){
                console.log(exportRubric[i])
                if(exportRubric[i].name === name){
                    alert("Rubric already exists")
                    return;
                }
            }
            setRubric([...rubric, LearningTarget({name, em_criteria, de_criteria, ex_criteria, ed_criteria, rubric, setRubric})]);
            setExportRubric([...exportRubric, {name, em_criteria, de_criteria, ex_criteria, ed_criteria}]);
        }
        else{
            console.log("add rubric")
            setRubric(["hi"]);
        }
    } 

    function editTarget(){
        console.log("NOT CREATE, FALSEEE")
        console.log("id: " + id)
        navigate("/rubric-editor", {state:{isNew: false, id: id, name: name, em_criteria: em_criteria, de_criteria: de_criteria, ex_criteria: ex_criteria, ed_criteria: ed_criteria}});
    }

    function editRubric(createNew){
        console.log("create rubric")
        if(createNew){
            console.log("new rubric")
            navigate("/rubric-editor", {state: {isNew: true}});
        }
    }

    return (
    <div>
        {
            isAdd ? 
            <div className="button-container" style={{display: "flex", alignItems: "center", justifyContent: "center"}} onClick={() => editRubric(true)}>
                <img src="/assets/plus.png" id="add-button" />
            </div>
            :
            <div className="button-container" onClick={addToRubric}>
                <img onClick={(event) =>
                {
                    editTarget();
                    event.stopPropagation();
                }
                } id="edit-rubric-button" src="/assets/edit.png" alt="edit-button"/>
                <h2 id="rubric-button" style={{}}>{name}</h2>
            </div>
        }
    </div>
    )
}

export default RubricButton;