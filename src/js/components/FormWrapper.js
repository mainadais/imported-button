import React, { Component } from "react";
import { Form } from "@mainadais/exported-button";

class FormWrapper extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="form-wrapper">
        <Form />
      </div>
    );
  }
}

export default FormWrapper;
