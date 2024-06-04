import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, act } from "react";
import { addToLearningTargets, deleteLearningTargets, updateLearningTargets } from "./test";

function RubricEditor(){
    let tabs = ["EM", "DE", "EX", "ED"]
    const [activeTab, setActiveTab] = useState(0);
    const location = useLocation();
    const [rubricName, setRubricName] = useState(location.state?.name || "");
    const [EM, setEM] = useState(location.state?.em_criteria || "");
    const [DE, setDE] = useState(location.state?.de_criteria || "");
    const [EX, setEX] = useState(location.state?.ex_criteria || "");
    const [ED, setED] = useState(location.state?.ed_criteria || "");
    const isNew = location.state?.isNew;
    const id = location.state?.id;
    const navigate = useNavigate();

    const handleDeleteLearningTargets = async () => {
        await deleteLearningTargets(id);
        navigate("/");
    }

    const handleAddToLearningTargets = async () => {
        if(isNew){
            await addToLearningTargets(rubricName, EM, DE, EX, ED);
            navigate("/");
        }
        else{
            console.log("id: " + id);
            console.log("rubricName: " + rubricName);
            console.log("EM: " + EM);
            console.log("DE: " + DE);
            console.log("EX: " + EX);
            console.log("ED: " + ED);
            await updateLearningTargets(id, rubricName, EM, DE, EX, ED);
            navigate("/");
        }
    }
    
    useEffect(() => {
        console.log("EM" + EM, "DE" + DE, "EX" + EX, "ED" + ED);
        console.log("isNew: " + location.state.isNew, "test: " + isNew);
        console.log("id: " + location.state.id);
    }, [EM, DE, EX, ED])

    const changeTab = (index) => {
        setActiveTab(index);
    }

    const handleChange = (e) => {
        switch(activeTab){
            case 0:
                setEM(e.target.value);
                break;
            case 1:
                setDE(e.target.value);
                break;
            case 2:
                setEX(e.target.value);
                break;
            case 3:
                setED(e.target.value);
                break;
        }
    }

    return (
        <div id="rubric-editor-container" style={{justifyContent: "column"}}>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "5vh"}}>
                <textarea name="" id="" cols="50" rows="2" value={rubricName} onChange={(e)=>{
                    setRubricName(e.target.value);
                }}></textarea>
            </div>
            <div id="tabs-container">
                {
                    tabs.map((item, index) => {
                        return (
                            <div className="tab" onClick={() => changeTab(index)} style={{backgroundColor: activeTab === index ? "#D6D6D6" : "#8D8D8D"}}>
                                <h2>{item}</h2>
                            </div>
                        )
                    })
                }
            </div>
            <div id="descriptor-editor-container">
                {
                    activeTab === 0 ?
                    <textarea name="" id="" cols="30" rows="10" value={EM} onChange={(e)=>{
                        handleChange(e);
                    }}></textarea>
                    :
                    activeTab === 1 ?
                    <textarea name="" id="" cols="30" rows="10" value={DE} onChange={(e)=>{
                        handleChange(e);
                    }}></textarea>
                    :
                    activeTab === 2 ?
                    <textarea name="" id="" cols="30" rows="10" value={EX} onChange={(e)=>{
                        handleChange(e);
                    }}></textarea>
                    :
                    <textarea name="" id="" cols="30" rows="10" value={ED} onChange={(e)=>{
                        handleChange(e);
                    }}></textarea>
                }
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent:"center", marginTop: "5vh"}}>
                <div id="save-rubric">
                    <button onClick={() => {
                        handleAddToLearningTargets();
                    }} style={{marginRight: isNew ? "0" : "2vw"}}>Save Learning Target</button>
                </div>
                <div id="delete-rubric">
                    <button onClick={() => {
                        handleDeleteLearningTargets();
                    }} style={{marginLeft: "2vw", background: "red", display: isNew ? "none" : "block"}}>Delete Learning Target</button>
                </div>
            </div>
        </div>
    )
}


export default RubricEditor;