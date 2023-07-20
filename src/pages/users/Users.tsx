import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>사용자 목록</h1>
        <button>Add New User</button>
      </div>
      <DataTable />
    </div>
  );
};

export default Users;
