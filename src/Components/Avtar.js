import React from "react";
import "./Avtar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dor from "./dor.png";

function Avtar(props) {
  var name;
  if (props.name === "") name = dor;
  else name = "https://joeschmoe.io/api/v1/" + props.name;
  console.log(name);
  return (
    <div className="effect5">
      <center>
        <div className="blk img-fluid">
          <img
            src={name}
            alt={dor}
            className="Avtimg"
            height="250rem"
            width="250rem"
          />
        </div>
      </center>
    </div>
  );
}

export default Avtar;
