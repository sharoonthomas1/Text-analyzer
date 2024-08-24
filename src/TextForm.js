import React, { useState } from 'react';
export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const handleUPClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.ShowAlert("Text converted to Uppercase", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.ShowAlert("Text converted to Lowercase", "error");
  };

  const handleClear = () => {
    setText('');
    props.ShowAlert("Text cleared", "info");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.ShowAlert("Text copied", "warning");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.ShowAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div className="section">
        <h1 className=" mt-4 fst-italic text-dark" >Try TextAnalyzer - Your One Stop Solution for Analyzing Texts</h1>
        <div className="mb-3 mt-5">
          <textarea
            className="form-control text-dark text-areea"
            value={text}
            id="myBox"
            rows="6"
            style={{ backgroundColor: "transparent",  fontSize: "22px" }}
            onChange={handleonChange}
          />
        </div>

        <button disabled={text.length === 0} className="btn  btn-success text-white me-2 my-1 p-2" onClick={handleUPClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn  btn-success  text-white my-1 p-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn  btn-success text-white ms-2 my-1 p-2" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length === 0} className="btn  btn-success  text-white ms-2 my-1 p-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn  btn-success  text-white ms-2 my-1 p-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        <div className="">
        <h1 className="text-dark mt-4 fs-1 pb-3 fw-semibold">Text Summary:</h1>
    <div className='d-flex justify-content-between'>
    <h2 className="text-dark">Words: {text.split(/\s+/).filter((element) => element.length !== 0).length}</h2>
        <h2 className="text-dark">Characters: {text.length}</h2>
        <h2 className="text-dark">Minutes Read: {(0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length).toFixed(2)}</h2>
    </div>
        <h1 className="text-dark mt-4 fw-semibold">Preview:</h1>
        <h3 className="text-dark">{text.length > 0 ? text : "Nothing to preview"}</h3>
      </div>
      </div>

      
    </>
  );
}

