import React from "react";
import PropTypes from "prop-types";

export default function ReusableTextInput(props) {
  // Set classname depend on error with string concat (consider classnames NPM pack?)

  let wrapperClass = "form-group";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          placeholder="Enter your input"
          className="inputArea"
          onChange={props.onChange}
          name="fullName"
          value={props.value}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

ReusableTextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

// can define default props value, so no need to check if exists

ReusableTextInput.defaultProps = {
  error: "",
};
