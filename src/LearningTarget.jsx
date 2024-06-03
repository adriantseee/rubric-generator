function LearningTarget({name, em_criteria, de_criteria, ex_criteria, ed_criteria}){
    return (
        <div className="table-wrapper">
            <div className="learning-targets-container">
                <div id="left-div">
                    <h2>{name}</h2>
                </div>
                <div id="right-div">
                    <div className="criterias-container">
                        <div className="criteria-container">
                            <h3>{em_criteria}</h3>
                        </div>
                        <div className="criteria-container">
                            <h3>{de_criteria}</h3>
                        </div>
                        <div className="criteria-container">
                            <h3>{ex_criteria}</h3>
                        </div>
                        <div className="criteria-container">
                            <h3>{ed_criteria}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearningTarget;