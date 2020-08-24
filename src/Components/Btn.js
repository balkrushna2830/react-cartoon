import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Avtar from "./Avtar";
function Btn(props) {
  var [nm,setNm] = useState("");
  return (
    <div>
      <div className="Btn">
        <br />
        <Avtar name={nm} />
        <center>
          <br />
          <button
            className="btn btn-primary btn-lg"
            onClick={() => {
              setNm(props.name);
              console.log(props.name);
            }}
          >
            Get
          </button>
        </center>
      </div>
      
    </div>
  );
}

export default Btn;
