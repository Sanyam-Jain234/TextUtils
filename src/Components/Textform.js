import React, {useState}from 'react'
//import PropTypes from 'prop-types'; 


export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text); 
    // setText(text.toUpperCase());
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase" , "Success");
  }
  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase" , "Success");
  }
  const handleClearClick = ()=> {
    console.log("clear was clicked"+ text);
    let newText = ' ';
    setText(newText);
    props.showAlert("Text was clear" , "Success");
  }
  const handleCopyClick = ()=> {
    console.log("Copy was clicked" + text);
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied" , "Success");
  }
   const handleOnchange = (event) => {
    console.log("Onchange was clicked");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text ="new text"; wrong way to set text
  // setText("new text");  correct way 
  return (
    <>

    <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor : props.mode ===  'dark'?'grey':'white',color :props.mode === 'dark'?'white':'black'}} id="myBox" rows="12"></textarea>
</div>
<button className="btn btn-primary" type="submit" onClick= {handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" type="submit" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary " type="submit" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" type="submit" onClick={handleCopyClick}>Copy Text</button>

    </div>
    <div className="container my-3" style={{ color : props.mode ==='dark'?'white':'black'}}>
      <h1>Text Summary Here</h1>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
