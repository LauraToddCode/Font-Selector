import React from "react"

function FontCard(props) {
    return(
        <div className="card" id={props.id}>
            <h2>{props.fontName}</h2>
            <p style={props.style}>{props.inputText}</p>
        </div>
    )
}

export default FontCard