import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./register.scss";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/auth/register", data)
      .then(function (response) {
        console.log(response.data);
        alert("ok");
      })
      .catch(function (error) {
        console.log(error.message);
      });

    console.log(data);
  };

  return (
    <div className="formnav">
      <Sidebar />
      <div className="formcontainer">
        <Navbar />
        <div className="tap">
          <h1>Add new product</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <h1>add user</h1>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="formInputt">
                <label> User name</label>
                <input {...register("username")} />
              </div>
              <div className="formInputt">
                <label>Email</label>
                <input type="" {...register("email")} />
              </div>
              <div className="formInputt">
                <label> Password</label>
                <input type="password" {...register("password")} />
              </div>

              <div className="formInputt">
                <Button className="button" type="submit" variant="contained">
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
