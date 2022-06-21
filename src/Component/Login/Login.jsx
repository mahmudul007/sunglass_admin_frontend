import React, { useState } from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import img1 from "./images.png";
import { useHistory } from "react-router-dom";
const axios = require("axios");

const Login = () => {
  const { register: login, handleSubmit } = useForm();
  const [logindata, setLogindata] = useState({});
  const [success, setSuccess] = useState({});
  const [error, setError] = useState();
  let history = useHistory();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/auth/login", data)
      .then((res) => {
        var token = res.data;
        var user = {
          userId: token._id,
          access_token: token.accesToken,
          isAdmin: token.isAdmin,
          username: token.username,
        };

        localStorage.setItem("user", JSON.stringify(user));
        console.log(JSON.parse(window.localStorage.getItem("user")));

        if (user.access_token !== undefined) {
          if (user.isAdmin == true) {
            alert("ok");
            setSuccess(token);
            console.log(success);
            history.push("/");
          } else {
            alert("you are not authorized");
          }
        } else if (res.data.status === "failed") {
          alert();
          setError(token, "error");
        }
      })
      .catch(function (error) {
        alert("password error");
        console.log("nott ok");
      });
  };

  return (
    <>
      <div className="head">
        <h2>Admin Login Page</h2>
      </div>

      <div className="full">
        <div className="left">
          <img className="imge" src={img1} alt="" />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="cent">
              <div className="formInput">
                <label htmlFor="">
                  <h5>User Name</h5>
                </label>
                <input className="textfild" {...login("username")} />
                <br />
              </div>
              <div className="formInput">
                <label htmlFor="">
                  <h5>Password</h5>
                </label>
                <input
                  className="textfild"
                  type="password"
                  {...login("password")}
                />
              </div>
              <br />
              <br />
              <div className="formInput">
                <Button variant="contained" type="submit">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
