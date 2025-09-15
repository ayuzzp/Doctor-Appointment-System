import { Link, Outlet } from "react-router-dom";

const DoctroDashBoard =()=>{
    return(
        <>
          <h1> Welcome To Doctor DashBoard</h1>
          <hr />
          <div id="doctorarea">
             <div id="doctormenu">
               <Link to="patientlist" > Patient List</Link>
                

             </div>
             <div id="doctordata">
                  <Outlet/>

             </div>

          </div>
        </>
    )
}
export default DoctroDashBoard;