import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {

  const [text, setText] = useState('');

  const handleUpClick = ()=>{
    // console.log("Uppercase was Clicked"); 
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text is converted to Uppercase!", "success")
  }
  
  const handleLoClick = ()=>{
    // console.log("Lowercase was Clicked"); 
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text is converted to Lowercase!", "success")
  }

  const handleInClick = ()=>{
    // console.log("InverseText was Clicked");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--){
      newtext += text[i];    
    }
    setText(newtext);
    props.showAlert("Text is converted to Inversetext!", "success")
  }

  const handleExClick = ()=>{
    // console.log("Extra Spaces was Removed");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed!", "success")
  }

  const handleClClick = ()=>{
    // console.log("Clear was Clicked"); 
    let newText = '';
    setText(newText)
    props.showAlert("Text has been cleared!", "success")
  }

  const handleOnChange = (event)=>{
    // console.log("On change"); 
    setText(event.target.value)
  }

  return (
  <>
    <div className="container my-2" style={{color: props.mode==='dark'? 'white' : 'black'}}>
      <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor: props.mode==='dark'? '#201e1e' : 'white', 
            color: props.mode==='dark'? 'white' : 'black'}}  id="myBox" 
            rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleInClick}>Convert to InverseText</button>
            <button className="btn btn-primary mx-1" onClick={handleExClick}>Remove ExtraSpaces</button>
            <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear</button>
    </div>
       <div className="container my-3"style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter(word => word.trim() !== "").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter(word => word.trim() !== "").length} minutes read time</p>
        <h3>Preview</h3>
        <p>{text.length>0? text : 'Please enter the text to preview'}</p>
       </div>
  </>
  )
}
Textform.propTypes = {heading: PropTypes.string.isRequired}