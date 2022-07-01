import React, { useState } from "react";
import "../Datatable/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import Editmodal from "./Edit/Editmodal";

const Productdata = ({ products, handleDelete }) => {
  //modal
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  ////editting
  const [editdata, setEditdata] = useState("");

  const handleEdit = (id) => {
    const data = products.find((item) => item._id == id);

    setEditdata(data);

    setOpen(true);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "Productname",
      fieldName: "name",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="cellwithimage">
            <img className="cellimg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "color",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "size",
      headerName: "Size",
      width: 150,
    },
    {
      field: "categories",
      headerName: "Categories",
      width: 150,
    },
  ];

  const action = [
    {
      field: "Action",
      fieldName: "Action",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}> */}
            <div
              className="viewbutton"
              onClick={() => handleEdit(params.row._id)}
            >
              {" "}
              Edit
            </div>
            {/* </Link> */}

            <div
              className="deletebutton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="datatable">
        <h4>Total product {products.length}</h4>
        <DataGrid
          getRowId={(row) => row._id}
          rows={products}
          columns={columns.concat(action)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          loading={!products.length}
        />
      </div>

      <Editmodal
        handleClose={handleClose}
        open={open}
        handleClickOpen={handleClickOpen}
        editdata={editdata}
      ></Editmodal>
    </>
  );
};

export default Productdata;
