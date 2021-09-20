import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    //console.log("Uppercase the text" + text);
    let newText= text.toUpperCase();
    setText(newText)
    props.ShowAlert('Upper', "success")
  }

  const handleLoClick = () => {
    //console.log("Lowercase the text" + text);
    let newText= text.toLowerCase();
    setText(newText)
    props.ShowAlert('Lower', "success")
  }

  const handleUperfirst = () => {
    //console.log("Lowercase the text" + text);
  let newText= text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  setText(newText)
  props.ShowAlert('Lower', "success")
  }


    const handleChangeClick = () => {
    //console.log("Lowercase the text" + text);
    let text= document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.ShowAlert('Copied', "success")
  }

  const handleOnClick = (event) => {
  console.log("Uppercase the click");
  setText(event.target.value);
  }


  const [text, setText]= useState(' ');
  
  
  return (
<>
  <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" onChange={handleOnClick} value= {text} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'? 'white':'black'}} id="mybox" rows="3"></textarea>
      </div>
      <button type="button" className="btn btn-success mx-3" onClick= {handleUpClick}>Upper Class</button>
      <button type="button" className="btn btn-success mx-3" onClick= {handleLoClick}>Low Class</button>
      <button type="button" className="btn btn-success mx-3" onClick= {handleChangeClick}>Copy</button>
      <button type="button" className="btn btn-success mx-3" onClick= {handleUperfirst}>Capitalize</button>
  </div>

  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1> This is your text summary  </h1>
  <p> {text.split(" ").filter( (element) => {return element.length!==0}).length} words and {text.length} characters </p>
  <p> {0.008 * text.split(" ").length} Minutes Read </p>
  <h2> Preview </h2>
  <p> {text} </p>
  </div>
</>
  )
}