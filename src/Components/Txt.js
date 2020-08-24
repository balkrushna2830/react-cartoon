import React,{useState} from "react";
import "./Txtcs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Btn from "./Btn";
function Txt() {
  const [inpt,setInpt] = useState("");
  return (
    <div className="Txtcs">
      <center>
        <br />
        <div
          className="form-group row "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-lg-3">
            <input
              type="text"
              id="nm"
              className="form-control"
              placeholder="Name"
              value ={inpt}
              onChange ={e => {setInpt(e.target.value)
                console.log(e.target.value);
              }}
            />
            <Btn name={inpt}/>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Txt;
