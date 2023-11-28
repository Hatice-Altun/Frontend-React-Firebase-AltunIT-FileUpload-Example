import React from "react";
import {useState} from "react";
import {storage} from "./firebase";
import {ref, uploadBytes} from "@firebase/storage";
import {v4} from "uuid";
import logo from "./assets/Logo-AltunIT-Black.png";
import "./App.css";

//npm i @firebase/storage
// npm i uuid

function App() {
  const [fileUpload, setFileUpload] = useState(null);
  const uploadFile = () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then(() =>{
      alert("File Uploaded! ")
    })
  };

  return (
      <div className="App">
        <img src={logo} alt=" "/>
        <input type="file" onChange={(event) => {
          setFileUpload(event.target.files[0])
        }}/>
        <button onClick={uploadFile}>Upload File</button>
      </div>
  );
}

export default App;
