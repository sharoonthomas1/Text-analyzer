import React, { useState } from 'react';
import Nav from './Nav'; 
import TextForm from './TextForm';
import Alert from './Alert';


function App() {
  const [alert, setAlert] = useState(null);
  // const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div>
      <Nav />
      <Alert alert={alert} />
      <TextForm ShowAlert={showAlert} />
    </div>
  );
}

export default App;

// import Nav from './Nav';
//  import TextForm from "./TextForm";
// import { useState } from "react";
// import Alert from "./Alert";


// function App() {
//   const [mode, setMode] = useState('dark');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     });

//     setTimeout(() => {
//       setAlert(null);
//     }, 3000);
//   }

//   const toggleMode = () => {
//     // if (mode === "dark") {
//     //   setMode('light');
//     //    document.body.style.backgroundColor = "black";
//     // } else {
//     //   setMode('dark');
//     //   document.body.style.backgroundColor = "black";

//     // }
//     if (mode === "light") {
//       setMode('dark');
//       document.body.style.backgroundColor = "black";
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = "white";
//       showAlert("light mode enabled", "success");
//     }
//   }


//   return (
//     <>
//     <Nav mode={mode} toggleMode={toggleMode} />
//           <Alert alert={alert} />
//           <div className="container my-4">
//      <TextForm/>
//       </div>
//     </>);
// }