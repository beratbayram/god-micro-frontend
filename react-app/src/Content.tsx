import React from "react";
import PropTypes from 'prop-types';

import "./index.css";

export default function Content({name,msg}) {
  return (
    <div className="react-container">
      <div>React2 (:3001)</div>
      <input type="text" disabled value={msg}/>
      <lit-button />
    </div>
  );
}

Content.propTypes = {
  name: PropTypes.string,
  msg: PropTypes.string
}
