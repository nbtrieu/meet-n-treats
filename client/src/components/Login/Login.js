import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";
import "./login.css";
import image from '../../assets/background.png';


function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [Login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await Login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (     
      <div className="app-login_page">
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
          <h1>Sign In</h1>
          <form onSubmit={handleFormSubmit}>
              <label htmlFor="email">Username</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleInputChange}
              />
              <button className="login" type="submit">Login</button>
            </form>


          {/* <div className="app-login_page__container__header">
            </div> */}
            </div>


        </div>
  );
}

export default Login;
