import React, { useState } from "react";
import "./Form.css";

export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {},
});

const Form = ({ children, initialValues, heading }) => {
  const [form, setForm] = useState(initialValues);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);
  };

  console.log(form);

  return (
    <form>
      <h1>{heading}</h1>
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
        }}
      >
        {children}
      </FormContext.Provider>
      <input className="submit-btn" type="submit" value="sign up" />
    </form>
  );
};

export default Form;
