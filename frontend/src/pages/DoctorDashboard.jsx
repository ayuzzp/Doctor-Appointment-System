import { Link, Outlet } from "react-router-dom";

const DoctroDashBoard = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0", color: "#0d6efd" }}>
        👨‍⚕️ Welcome To Doctor Dashboard
      </h1>
      <hr />
      <div id="doctorarea">
        {/* Sidebar Menu */}
        <div id="doctormenu">
          <h3>Menu</h3>
          <Link to="patientlist">📋 Patient List</Link>
          <Link to="#">💊 Prescriptions</Link>
          <Link to="#">📅 Appointments</Link>
          <Link to="#">⚙️ Settings</Link>
        </div>

        {/* Content Area */}
        <div id="doctordata">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DoctroDashBoard;
