import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";

function Register() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    petName: "",
    petAge: "",
    petType: "",
  });

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
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Your username"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Your email"
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
        <input
          type="text"
          placeholder="Pet name"
          name="petName"
          value={formState.petName}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Pet age"
          name="petAge"
          value={formState.petAge}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Pet type"
          name="petType"
          value={formState.petType}
          onChange={handleInputChange}
        />
        <button type="submit">Sign up</button>
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
