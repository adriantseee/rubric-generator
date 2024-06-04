import {useState} from 'react';

function LearningTarget({name, em_criteria, de_criteria, ex_criteria, ed_criteria, rubric, setRubric}){
    return (
        <div className="learning-targets-container">
            <div id="left-div">
                <div className="criteria-name-container">
                    <h2 style={{marginTop: "0.25vh"}}>{name}</h2>
                </div>
            </div>
            <div id="right-div">
                <div className="criterias-container">
                    <div className="criteria-container">
                        <h3 className="criteria-desc">{em_criteria}</h3>
                    </div>
                    <div className="criteria-container">
                        <h3 className="criteria-desc">{de_criteria}</h3>
                    </div>
                    <div className="criteria-container">
                        <h3 className="criteria-desc">{ex_criteria}</h3>
                    </div>
                    <div className="criteria-container">
                        <h3 className="criteria-desc">{ed_criteria}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearningTarget;