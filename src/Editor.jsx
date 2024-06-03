import './Editor.css'
import Button from './Button';
import LearningTarget from './LearningTarget';
import { useState, useEffect } from 'react';
import { fetchLearningTargets } from './test';

function Editor(){
    const [loaded, setLoaded] = useState(false);
    const [rubric, setRubric] = useState([]);
    const [learningTargets, setLearningTargets] = useState([]);

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
                            return <Button rubric={rubric} setRubric={setRubric} isAdd={false} name={item.name} em_criteria={item.em_criteria} de_criteria={item.de_criteria} ex_criteria={item.ex_criteria} ed_criteria={item.ed_criteria}/>
                        }
                    )}
                    <Button rubric={rubric} setRubric={setRubric} isAdd={true}/>
                </div>
                <div className="table-wrapper-inner">
                    <div className="learning-targets-container">
                        <div id="left-div" style={{background: "#8D8D8D", color: "#FBFBFB"}}>
                            <h2>Measurement Topic</h2>
                        </div>
                        <div id="right-div">
                            <div className="criterias-container">
                                <div className="criteria-container" style={{fontSize: "0.75vw", background: "#8D8D8D", color: "#FBFBFB"}}>
                                    <h3>Emerging</h3>
                                </div>
                                <div className="criteria-container" style={{fontSize: "0.75vw", background: "#8D8D8D", color: "#FBFBFB"}}>
                                    <h3>Developing</h3>
                                </div>
                                <div className="criteria-container" style={{fontSize: "0.75vw", background: "#8D8D8D", color: "#FBFBFB"}}>
                                    <h3>Exhibiting</h3>
                                </div>
                                <div className="criteria-container" style={{fontSize: "0.75vw", background: "#8D8D8D", color: "#FBFBFB"}}>
                                    <h3>Exhibting Depth</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        rubric?.map(item => {
                            return item;
                        }
                    )}
                </div>
            </div>
        }
        </div>
    )
}

export default Editor;