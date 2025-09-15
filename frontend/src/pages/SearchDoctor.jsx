import { useState } from "react";
import BackEndUrl from "../utils/BackEndUrl";
import axios from "axios";
import { ToastContainer,  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchDoctor = () => {
    const [input,setInput]=useState("");
     const [results, setResults] = useState([]); 

    const handleSearch=async()=>{
 let api=`${BackEndUrl}/doctor/searchdoctor?name=${input}`
 let res= await axios.get(api)
 setResults(res.data)
 console.log(res.data)
 if (res.data.length === 0) {
     toast.error("Doctor Not Found!");
}

    }
    const ans = results.map((key)=>{
        return(
            <>
            <div className="doctor-card">
                <ul>
            <li>
              <img 
                src={key.image} 
                alt={key.doctorname} 
                style={{ width: "120px", height: "120px", objectFit: "cover" }} 
              />
            </li>
            <li>{key.doctorname}</li>
            <li>{key.speciality}</li>
            <li>{key.city}</li>
          </ul>
            </div>
            </>
        )
    })
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" 
           style={{ minHeight: "70vh" }}> 
        <div className="input-group w-50">
          <input type="search" id="form1" className="form-control" placeholder="Search doctor..." value={input} onChange={(e)=>{setInput(e.target.value)}}/>
          <button type="button" className="btn btn-primary" onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="search-results">
        {ans}
      </div>

       <ToastContainer/>
    </>
  )
}

export default SearchDoctor;
