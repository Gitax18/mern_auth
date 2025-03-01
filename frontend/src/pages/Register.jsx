import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { HandleError, HandleSuccess } from "../utils/toasts";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const registerInfoCopy = { ...registerInfo };
    registerInfoCopy[name] = value;
    setRegisterInfo(registerInfoCopy);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = registerInfo;

    if (!name || !email || !password) {
      HandleError("Please fill all the fields");
    }

    try {
      const url = "/register";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        setRegisterInfo({
          name: "",
          email: "",
          password: "",
        });
        HandleSuccess(message);
        setTimeout(() => {
          navigate("/");
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
      <h1>Register Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={registerInfo.name}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={registerInfo.email}
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={registerInfo.password}
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
