import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef, act } from "react";

function RubricEditor(){
    let tabs = ["EM", "DE", "EX", "ED"]
    const [rubricName, setRubricName] = useState("");
    const [activeTab, setActiveTab] = useState(0);
    const [EM, setEM] = useState("");
    const [DE, setDE] = useState("");
    const [EX, setEX] = useState("");
    const [ED, setED] = useState("");
    const location = useLocation();
    
    useEffect(() => {
        console.log("EM" + EM, "DE" + DE, "EX" + EX, "ED" + ED);
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
            <textarea name="" id="" cols="30" rows="10" value={rubricName} onChange={(e)=>{
                setRubricName(e.target.value);
            }}></textarea>
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
            <div id="save-rubric">
                <button onClick={() => {
                    console.log("save rubric");
                }}>Save Rubric</button>
            </div>
        </div>
    )
}

export default RubricEditor;