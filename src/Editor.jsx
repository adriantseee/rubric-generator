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
    const fileName="rubric";
    const exportType= exportFromJSON.types.csv;

    function exportToCSV(){
        console.log("downloading")
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

    var rubricButtons = [<Button rubric={rubric} setRubric={setRubric} isAdd={false}/>, <Button rubric={rubric} setRubric={setRubric} isAdd={true}/>];
    return(
        <div>
        {
            !loaded ?
            <div>
                loading...
            </div>
                :
            <div className="editor-container">
                <div id="buttons-container">
                    {
                        learningTargets.map(item => {
                            return <Button rubric={rubric} setRubric={setRubric} exportRubric={exportRubric} setExportRubric={setExportRubric} isAdd={false} name={item.name} em_criteria={item.em_criteria} de_criteria={item.de_criteria} ex_criteria={item.ex_criteria} ed_criteria={item.ed_criteria} id={item.id}/>
                        }
                    )}
                    <Button rubric={rubric} setRubric={setRubric} isAdd={true}/>
                </div>
                <div className="export-button">
                    <button onClick={(event) => 
                        exportToCSV()
                    }>Export</button>
                </div>
                <div className="table-wrapper">
                    <div className="learning-targets-container">
                        <div id="left-div" style={{background: "#B7B7B7", color: "#FBFBFB"}}>
                            <div className="criteria-name-container">
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
                        rubric?.map(item => {
                            return item
                        }
                    )}
                </div>
            </div>
        }
        </div>
    )
}

export default Editor;