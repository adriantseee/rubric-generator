import './Editor.css'
import Button from './Button';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Editor(){
    const navigate = useNavigate();
    {/*
    const location = useLocation()
    const [rubric, setRubric] = useState(["hi"]);
    var rubricButtons = [<Button rubric={rubric} setRubric={setRubric} isAdd={false}/>, <Button rubric={rubric} setRubric={setRubric} isAdd={true}/>];
    return(
        <div>
            <input placeholder="Input Title" id="document-name" style={{margin: "3vh"}}/>
            <div id="buttons-container">
                {
                    rubricButtons.map(item => {
                        return item;
                    }
                )}
                <h1>{location.rubric}</h1>
            </div>
            {
                rubric?.map(item => {
                    return <h1>{item}</h1>
                }
            )}
        </div>
            )*/}
    class Rubric{
        constructor(name, em, de, ex, ed){
            this.name = name;
            this.em = em;
            this.de = de;
            this.ex = ex;
            this.ed = ed;
        }
    }
    const [rubric, setRubric] = useState(["hi"]);
    const [navigateTo, setNavigateTo] = useState(false)
    const [rubricButtons, setRubricButtons] = useState([<Button rubric={rubric} setRubric={setRubric} isAdd={true} setNavigateTo={setNavigateTo}/>]);
    useEffect(() => {
        if(navigateTo){
            navigate("/rubric-editor", {state: {rubric: setRubric}});
            setNavigateTo(false);
        }
    }
    , [navigateTo])
    return(
        <div>
            <input placeholder="Input Title" id="document-name" style={{margin: "3vh"}}/>
            <div id="buttons-container">
                {
                    rubricButtons.map(item => {
                        return item;
                    }
                )}
            </div>
        </div>
    )
}

export default Editor;