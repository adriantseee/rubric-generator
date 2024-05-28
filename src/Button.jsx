import './Editor.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function RubricButton({ rubric, setRubric, isAdd}){
    const [isNewRubric, setIsNewRubric] = useState(false);
    const navigate = useNavigate();
    function addToRubric(){
        if(rubric){
            console.log("add rubric");
            setRubric([...rubric, "1"]);
        }
        else{
            console.log("add rubric")
            setRubric(["hi"]);
        }
    } 

    function editTarget(){
        console.log("edit rubric")
        navigate("/rubric-editor", {state:{isNew: false}});
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
                <img src="plus.png" id="add-button" />
            </div>
            :
            <div className="button-container" onClick={addToRubric}>
                <img onClick={(event) =>
                {
                    editTarget();
                    event.stopPropagation();
                }
                } id="edit-rubric-button" src="edit.png" alt="edit-button"/>
                <h2 id="rubric-button">Reporting Category 1</h2>
            </div>
        }
    </div>
    )
}

export default RubricButton;