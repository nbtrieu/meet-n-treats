import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";

function Register() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });

  // const [registerError, setRegisterError] = useState('');

  const [register, { error, data }] = useMutation(REGISTER_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await register({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.register.token);
    } catch (error) {
      // setRegisterError(error);
      console.error(error);
    }
  };
  return (
    <div className="signup-form-card flex-column align-center">
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Your username*"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Your email*"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="******"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />        
        <button type="submit" className="btn btn-info signup-btn">Sign up</button>
      </form>
      {error && (
        <div className="text-danger">
          Invalid credentials
        </div>
      )}
    </div>
  );
}

export default Register;
