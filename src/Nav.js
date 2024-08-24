import React from 'react';
// import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav className={`navbar ps-5 nav  navbar-expand-lg navbar-${props.mode}`}>
      <div className="container-fluid">
        <h3 className='text-dark'>TEXT-ANALYZER
        </h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={() => myFunction()} style={{ width: "30px", height: "30px" }}></div>
            <div className="bg-danger rounded mx-2"  onClick={() => myFunction2()}  style={{ width: "30px", height: "30px" }}></div>
            <div className="bg-success rounded mx-2"  onClick={() => myFunction3()} style={{ width: "30px", height: "30px" }}></div>
            <div className="bg-warning rounded mx-2"  onClick={() => myFunction4()}  style={{ width: "30px", height: "30px" }}></div>
            <div className="bg-info rounded mx-2"  onClick={() => myFunction5()}  style={{ width: "30px", height: "30px" }}></div>
          </div> */}
     
          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Nav.defaultProps = {
  title: "home"
};

export default Nav;

function myFunction() {
  document.getElementById("myDIV").style.backgroundColor = "lightblue";
}
function myFunction2() {
  document.getElementById("myDIV").style.backgroundColor = "red";
}
function myFunction3() {
  document.getElementById("myDIV").style.backgroundColor = "green";
}
function myFunction4() {
  document.getElementById("myDIV").style.backgroundColor = "yellow";
}
function myFunction5() {
  document.getElementById("myDIV").style.backgroundColor = "pink";
}
