import { useLocation } from "react-router-dom";

function RubricEditor({isNew}){
    const location = useLocation();
    return (
        <div>
            <h1>Rubric Editor</h1>
            <h2 onClick={console.log(location)}>{location ? "New Rubric" : "Edit Rubric"}</h2>
        </div>
    )
}

export default RubricEditor;