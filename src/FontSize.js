import React from "react";

function FontSize (props) {

    return(
        <div className="inputContainer">
            <label>Enter a font size (px):</label>
            <input type="text" onChange={props.onChangeFontSize} defaultValue="24" />
        </div>
        
    )
}

export default FontSize