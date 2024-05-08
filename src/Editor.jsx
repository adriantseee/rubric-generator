import './Editor.css'
import Button from './Button';

function Editor(){
    return(
        <div>
            <input placeholder="Input Title" id="document-name" style={{margin: "3vh"}}/>
            <Button />
        </div>
    )
}

export default Editor;