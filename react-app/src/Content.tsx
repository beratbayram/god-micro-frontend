import React from "react";
import PropTypes from 'prop-types';

import "./index.css";

export default function Content({name}) {
  return (
    <div className="react-container">
      <div>{name ?? "React"} (:3001)</div>
      <lit-button />
    </div>
  );
}

Content.propTypes = {
  name: PropTypes.string
}
