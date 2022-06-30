import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useForm } from "react-hook-form";

const Editmodal = ({ handleClickOpen, handleClose, open, editdata }) => {
  const { title, price, size, color, desc, categories, _id, products } =
    editdata;
  var token = null;
  if (localStorage.getItem("user")) {
    var obj = JSON.parse(localStorage.getItem("user"));
    token = obj.access_token;
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, id) => {
    // send to the server
    axios
      .put(`http://localhost:5000/api/product/${_id}`, data, {
        headers: {
          token: `Bearer ${("token", token)}`,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          alert("sucessfull");
          window.location.reload();
          handleClose(true);
        }
      })

      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="title"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={title}
              {...register("title")}
            />

            <TextField
              autoFocus
              margin="dense"
              name="color"
              label="Color"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={color}
              {...register("color")}
            />
            <TextField
              autoFocus
              margin="dense"
              name="size"
              label="Size"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={size}
              {...register("size")}
            />
            <TextField
              autoFocus
              margin="dense"
              name="categories"
              label="Categories"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={categories}
              {...register("categories")}
            />
            <TextField
              autoFocus
              margin="dense"
              name="price"
              label="Price"
              type="number"
              fullWidth
              variant="standard"
              defaultValue={price}
              {...register("price")}
            />
            <TextField
              autoFocus
              margin="dense"
              name="desc"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              defaultValue={desc}
              {...register("desc")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Update</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Editmodal;
