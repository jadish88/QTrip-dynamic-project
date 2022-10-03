import React from "react"
function Step1() {
    return (
        <div className="main active">
            <div className="input-text">
                <input type="text" placeholder="Steve Jobs" id="full-name" require/>
                <span>Full Name</span>
            </div>
            <div className="input-text"> 
                <input type="text" placeholder="Steve"/>
                <span>Display Name</span>
            </div>
        </div>
    )
}

export default Step1

