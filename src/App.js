import React from "react";
import data from "./fontData.json"
import FontCard from "./FontCard"

function App() {
    const [inputText, setInputText] = React.useState("Sample Text...")

    const handleChange = (event) => {
        setInputText(event.target.value)
    }

    const [ value, setValue ] = React.useState("24");

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
                <div className="inputContainer">
                    <label for="customRange1" class="form-label">Choose your font size:</label>
                    <div id="sliderContainer">
                        <p id="pxDisplay">{value}px</p>
                        <input type="range" min="10" max="80" defaultValue="24" class="form-range" id="customRange1" onChange={handleFontSize} />
                    </div>
                </div>
            </header>
            
            <div id="cardsContainer">
                {data.map(fonts => <FontCard id={fonts.id} fontFamily={fonts.fontFamily} fontName={fonts.fontName} key={fonts.key} inputText={inputText} style={{fontSize: value + "px"}}/>)}
            </div>
        </div>
        
    )
}

export default App