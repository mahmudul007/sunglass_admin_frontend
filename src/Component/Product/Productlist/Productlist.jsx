import React, { useState, useEffect } from "react";
import "../../Datatable/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

export const Productlist = ({ loading, product }) => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "productname",
      fieldName: "name",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="cellwithimage">
            <img
              className="cellimg"
              src={`data:image/jpg/png;base64,${params.row.img}`}
              alt=""
            />
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
  useEffect(() => {
    fetch("http://localhost:5000/api/product/")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  });

  const action = [
    {
      field: "action",
      fieldName: "Action",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}> */}
            <div className="viewbutton"> View</div>
            {/* </Link> */}

            <div
              className="deletebutton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <h4>Total product {data.length}</h4>
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        columns={columns.concat(action)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        loading={!data.length}
      />
    </div>
  );
};
