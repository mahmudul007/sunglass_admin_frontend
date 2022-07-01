import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../dummydata";
import { Link } from "react-router-dom";

export const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "Name", width: 100 },
    {
      field: "Category",
      fieldName: "User",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="cellwithimage">
            {/* <img className="cellimg" src={params.row.img} alt="" /> */}
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Price",
      width: 220,
    },
    {
      field: "age",
      headerName: "Size",
      width: 220,
    },
    {
      field: "status",
      headerName: "Color",
      width: 220,
      // renderCell: (params) => {
      //   return (
      //     <div className={`cellwithStatus ${params.row.status}`}>
      //       {params.row.status}
      //     </div>
      //   );
      // },
    },
  ];

  const action = [
    {
      field: "Action",
      fieldName: "action",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewbutton"> View</div>

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
      <DataGrid
        rows={userRows}
        columns={columns.concat(action)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
