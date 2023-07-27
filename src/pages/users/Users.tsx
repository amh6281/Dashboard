import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "프로필",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "name",
    headerName: "성명",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "이메일",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "연락처",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "가입일",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "인증",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>사용자 목록</h1>
        <button onClick={() => setOpen(true)}>사용자 추가</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
