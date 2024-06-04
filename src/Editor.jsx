import './Editor.css'
import Button from './Button';
import LearningTarget from './LearningTarget';
import { useState, useEffect } from 'react';
import { fetchLearningTargets } from './test';
import exportFromJSON from 'export-from-json'

function Editor(){
    const [loaded, setLoaded] = useState(false);
    const [rubric, setRubric] = useState([]);
    const [exportRubric, setExportRubric] = useState([]);
    const [learningTargets, setLearningTargets] = useState([]);
    const [rubricName, setRubricName] = useState("");
    const exportType= exportFromJSON.types.csv;

    function removeFromRubric(name){
        setRubric(rubric.filter(item => item.name !== name));
        setExportRubric(exportRubric.filter(item => item.name !== name));
    }

    function exportToCSV(){
        let fileName = rubricName;
        console.log("fn: " + fileName);
        exportFromJSON({data: exportRubric, fileName, exportType})
    }

    const handleFetchLearningTargets = async () => {
        var temp = await fetchLearningTargets();
        setLearningTargets(temp);
        setLoaded(true);
    }

    useEffect(() => {
        handleFetchLearningTargets();
    }, [])
    return(
        <div>
        {
            !loaded ?
            <div>
                Loading...
            </div>
                :
            <div className="editor-container">
                <div id="buttons-container" style={{marginBottom: "12vh"}}>
                    {
                        learningTargets.map(item => {
                            return <Button rubric={rubric} setRubric={setRubric} exportRubric={exportRubric} setExportRubric={setExportRubric} isAdd={false} name={item.name} em_criteria={item.em_criteria} de_criteria={item.de_criteria} ex_criteria={item.ex_criteria} ed_criteria={item.ed_criteria} id={item.id}/>
                        }
                    )}
                    <Button rubric={rubric} setRubric={setRubric} isAdd={true}/>
                </div>
                <textarea name="" id="" cols="40" rows="5" placeholder='Enter Your Rubric Name Here:' value={rubricName} onChange={(e)=>{
                    setRubricName(e.target.value);
                    console.log(rubricName);
                }}></textarea>
                <div className="table-wrapper" style={{backgroundColor: "#8D8D8D"}}>
                    <div className="learning-targets-container" style={{paddingLeft:"1vw"}}>
                        <div id="left-div" style={{background: "#B7B7B7", color: "#FBFBFB", marginLeft:"12390128390px"}}>
                            <div className="criteria-container" style={{marginLeft: "1vw", background: "#B7B7B7", color: "#FBFBFB"}}>
                                <h2 style={{marginTop: "0.25vh"}}>Measurement Topic</h2>
                            </div>
                        </div>
                        <div id="right-div">
                            <div className="criterias-container">
                                <div className="criteria-container" style={{background: "#B7B7B7", color: "#FBFBFB"}}>
                                    <h3 className="criteria-desc">Emerging</h3>
                                </div>
                                <div className="criteria-container" style={{background: "#B7B7B7", color: "#FBFBFB"}}>
                                    <h3 className="criteria-desc">Developing</h3>
                                </div>
                                <div className="criteria-container" style={{background: "#B7B7B7", color: "#FBFBFB"}}>
                                    <h3 className="criteria-desc">Exhibiting</h3>
                                </div>
                                <div className="criteria-container" style={{background: "#B7B7B7", color: "#FBFBFB"}}>
                                    <h3 className="criteria-desc">Exhibiting Depth</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        exportRubric?.map(item => {
                            return(
                                <div style={{display: "flex", flexDirection: "row", alignItems: "center", position: "relative"}}>
                                    <img src="trash.png" alt="" style={{width: "1.25vw", height: "1.25vw", verticalAlign: "center", position: "absolute", right: 0}} onClick={(event) =>{
                                            removeFromRubric(item.name);
                                        }
                                    }/>
                                    <LearningTarget name={item.name} em_criteria={item.em_criteria} de_criteria={item.de_criteria} ex_criteria={item.ex_criteria} ed_criteria={item.ed_criteria} rubric={rubric} setRubric={setRubric}/>
                                </div>
                            )
                        }
                    )}
                </div>
                <div className="export-button" style={{width: "40vw", height: "10vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "5vh", background: "black", borderRadius: "5vw"}}>
                    <h1 onClick={ () => {
                        if(rubricName === ""){
                            alert("Please enter a rubric name");
                        }
                        else{
                            exportToCSV();
                        }}}>Export as CSV</h1>
                </div>
            </div>
        }
        </div>
    )
}

export default Editor;