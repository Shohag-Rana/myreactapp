import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("to analyze");
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("convert to upper case letter", 'info');
    }
    const handleLowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("convert to lower case letter", 'primary');
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("clear the text", 'danger');
    }
    const handleRemoveExtraSpaceClick = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("remove the extra space", 'warning');
    }
    const textAreaChange = (event) =>{
        console.log('text area changed');
        setText(event.target.value);
        props.showAlert("text area changed", 'secondary');
    }
  return (
    <>
    <div className="container">
        <h2 className='my-4'>{props.heading} - {text}</h2>
        <div className="mb-3 mt-3" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
            <textarea className="form-control" id="myBox" rows="7" value={text} onChange={textAreaChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase {props.color}</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase {props.color}</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text {props.color}</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaceClick}>Remove Extra Space {props.color}</button>
        </div>
    <div className="container my-5">
        <h1>Your text summary </h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter some text"}</p>
    </div>
    </>
  )
}
