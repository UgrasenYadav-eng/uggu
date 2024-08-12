import React, { useState } from 'react'

export default function Texta(props) {
    const handleUpClick =()=>{
        console.log ("Upper Case was clicked + text");
        let newtext = text.toUpperCase();
        setText (newtext);
    };
    const handleLowerClick =()=>{
        console.log("Lower Case was clicked + text");
        let newtext= text.toLowerCase();
        setText (newtext);
    };
    const handleCopy =() => {
        console.log("Copy was clicked + text")
        navigator.clipboard.writeText(text);
    };
    const handlePasteClick = async () => {
        try {
          const text = await navigator.clipboard.readText();
          console.log("paste was clicked + text: ", text);
        } catch (err) {
          console.error('Failed to read clipboard contents: ', err);
        }
      };

//clear text start}
    const handleClearClick = () => {
        console.log("Clear was clicked");
    setText("");    
    };
    const handleOnChange = (event)=>{
        setText(event.target.value);
    };
 //clear text end}

    const [text, setText] = useState ('Enter text');
    return (
        <> 
        <div style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1> Case Converter </h1>
        <p>Just enter your text and choose the case you want to convert it to.</p>
        

                    <textarea id="text" className="text" rows="10" cols="160" value={text} onChange={handleOnChange} Style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'black'}} > 
                    </textarea>

                    <div classname= "container mx-2 my-2">
                            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Upper Case</button>
                            <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Lower Case</button>
                            <button className="btn btn-info mx-2 my-2" onClick={handleCopy}>Copy</button>
                            <button className="btn btn-success mx-2 my-2" onClick={handlePasteClick}>Paste</button>
                            <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>clear</button>
                    </div>
                    </div>
              
        <div>
        
            <h2>
                Summary of the text:-
            </h2>
            <p> Nunber of letters={text.length}.  You can read this in {0.0078 * text.length} minutes. </p>
            <p>Number of words = {text.split("").length} </p>
        </div>
        <di>
            <h3> Preview</h3>
            <p>{text.slice( )} </p>
        </di>
        </>
    )
}