import React,{ useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Form1 from "./Form1.css"
import Stepper from "react-stepper-horizontal";



function Form() {
    const [page,setPage]=useState(0);

    const FormTitles=["Welcome! First things first","Let's set up a home for all your work","How are you planning to use Eden?",""];
    const FormSubTitles=["You can always change them later.","You can always create another workspace later.","We'll stream line your setup accordingly.",""]

    const PageDisplay=()=>{
        if(page===0){
            return <Step1/>;
        }else if(page===1){
            return <Step2/>;
        }else if(page===2){
            return <Step3/>;
        }else{
            return <Step4/>;
        }
    };
    const sections = [
        { title: '', onClick: () => setPage(1) },
        { title: '', onClick: () => setPage(2) },
        { title: '', onClick: () => setPage(3) },
        { title: '', onClick: () => setPage(4) },
    ];
   
    return (
        <div classname="form">
           <div className="container">
    <div className="card">
        <div className="parent">
            <div className="top-div">
               <img src="https://i.imgur.com/d35O0dS.jpeg"/>
               <h3>Eden</h3>
            </div>
        </div>
        <div className="progressbar">
        <Stepper
          steps={sections}
          activeStep={setPage}
          activeColor="red"
          defaultBarColor="red"
          completeColor="green"
          completeBarColor="green"
        />
        {sections[0] === 1 && <Step1 />}
        {sections[1] === 2 && <Step1 />}
        {sections[2] === 3 && <Step1 />}
        {sections[3] === 4 && <Step1 />}
    
        
        </div>
        <div className="form-container">
        <div className="header">
        <div class="main active">
            <div class="content">
            <h4>{FormTitles[page]}</h4>
            <p>{FormSubTitles[page]}</p>
            </div></div>

        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
            <button
            disabled={page==FormTitles.length-1}
             onClick={()=>{setPage((currPage)=>currPage+1);
                
              
            }}
            >Create Workspace</button>
        </div>
        

        </div>
        </div>
        </div>
        </div>

    )
}

export default Form
