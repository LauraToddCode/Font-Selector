import React from "react";
import data from "./fontData.json"
import FontSize from "./FontSize";
import FontCard from "./FontCard"

function App() {
    const [inputText, setInputText] = React.useState("")

    const handleChange = (event) => {
        setInputText(event.target.value)
    }

    const [ value, setValue ] = React.useState("");

    const handleFontSize = (event) => {
        setValue(event.target.value)
    }

    return(
        <div id="wrapper">
            <header>
                <h1>Find Your Font</h1>
                <div className="inputContainer">
                    <label>Type something:</label>
                    <input type="text" id="inputText" placeholder="Sample Text..." onChange={handleChange}/>
                </div>
                <FontSize onChangeFontSize={handleFontSize} />
            </header>
            
            <div id="cardsContainer">
                {data.map(fonts => <FontCard id={fonts.id} fontFamily={fonts.fontFamily} fontName={fonts.fontName} key={fonts.key} inputText={inputText} style={{fontSize: value + "px"}}/>)}
            </div>
        </div>
        
    )
}

export default App