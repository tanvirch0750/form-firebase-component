import "./App.css";
import FormInput from "./components/Form-Input/FormInput";
import Form from "./components/Form/Form";

function App() {
  const signUpInitialValues = {
    name: "",
    emailAddress: "",
    password: "",
  };

  return (
    <div className="container">
      <h1>Form Component</h1>
      <div className="form-container">
        <button className="btn">Google Sign in</button>
        <Form initialValues={signUpInitialValues} heading="Sign Up">
          <FormInput label="Name" name="name" />
          <FormInput label="Email" name="emailAddress" />
          <FormInput label="Password" name="password" />
        </Form>
      </div>
    </div>
  );
}

export default App;
