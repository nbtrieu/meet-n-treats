import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import { Link } from 'react-router-dom';

import Auth from "../../utils/auth.js";
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
      <div className="login-form-card flex-column align-center">
            <div className="flex-column align-center" style={{backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "65vw",
              opacity: "0.9",
            }}>
              <div className="mt-7">
                <h1>Log In</h1>
              </div> 
              <form onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  placeholder="********"
                  name="password"
                  value={formState.password}
                  onChange={handleInputChange}
                />
                <button className="btn btn-block btn-primary text-dark login" type="submit">Login</button>
              </form>
              <h4>
                Don't have an account? 
                <Link className="text-link no-underline" to="/register"> Sign up</Link>
              </h4>
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>


        </div>
  );
}

export default Login;
