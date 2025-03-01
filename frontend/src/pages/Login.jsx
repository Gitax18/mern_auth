import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { HandleError, HandleSuccess } from "../utils/toasts";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const loginInfoCopy = { ...loginInfo };
    loginInfoCopy[name] = value;
    setLoginInfo(loginInfoCopy);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      HandleError("Please fill all the fields");
    }

    try {
      const url = "/login";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const { success, message, error, jwtToken, name } = result;
      if (success) {
        HandleSuccess(message);
        localStorage.setItem("jwtToken", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setLoginInfo({
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        if (error) HandleError(error.details[0].message);
        else HandleError(message);
      }
      console.log(result);
    } catch (error) {
      console.error("Error registering user: ", error);
    }
  }

  return (
    <div className="container">
      <h1>Login Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={loginInfo.email}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={loginInfo.password}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
