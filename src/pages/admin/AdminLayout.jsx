import AdminNavbar from "../../components/admin/AdminNavbar";
// import MessageToast from "../components/MessageToast";
import { Outlet } from "react-router-dom";
export function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <div className="container">
        {/* <MessageToast /> */}

        <Outlet />
      </div>
    </>
  );
}
