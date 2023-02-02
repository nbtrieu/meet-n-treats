import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";
import image from '../../assets/background.png';
function Register() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
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
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="app-register_page">
    <div className='app-landing_page__container__header-title'>
          <h1>PAWSWIPE</h1>
      </div>
      <hr className="lin"></hr>
  <div className="app-login_page__container" style={{backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "70vh",
      width: "98vw",
      opacity: "0.9",

}}> 
       <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
      <label htmlFor="email">Username</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
           <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        <button type="submit">Register User</button>
      </form>


    {/* <div className="app-login_page__container__header">
      </div> */}
      </div>


  </div>

  );
}

export default Register;
