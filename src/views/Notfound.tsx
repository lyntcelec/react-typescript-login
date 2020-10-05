import React from "react";
import "./Notfound.scss";
import {Alert} from "element-react";

function Notfound() {
  return (
    <div className="Notfound">
      <Alert title="Page not found" type="warning" />
    </div>
  );
}

export default Notfound;
