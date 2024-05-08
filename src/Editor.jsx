import './Editor.css'
import Button from './Button';
import { useState } from 'react';

function Editor(){
    const [rubric, setRubric] = useState(["hi"]);
    return(
        <div>
            <input placeholder="Input Title" id="document-name" style={{margin: "3vh"}}/>
            <Button rubric={rubric} setRubric={setRubric} />
            {
                rubric?.map(item => {
                    return <h1>{item}</h1>
                }
            )}
        </div>
    )
}

export default Editor;