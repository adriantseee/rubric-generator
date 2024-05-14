import './Editor.css'
import Button from './Button';
import { useState } from 'react';

function Editor(){
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
            </div>
            {
                rubric?.map(item => {
                    return <h1>{item}</h1>
                }
            )}
        </div>
    )
}

export default Editor;