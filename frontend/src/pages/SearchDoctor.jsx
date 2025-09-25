import { useState } from "react";
import BackEndUrl from "../utils/BackEndUrl";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { ToastContainer,  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const SearchDoctor = () => {
    const [input,setInput]=useState("");
     const [results, setResults] = useState([]); 
       const navigate=useNavigate();

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
            <Card className="shadow h-100">
            <Card.Img variant="top" src={key.image} style={{ height: "250px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>{key.doctorname}</Card.Title>
              <Card.Text>  Specialization : {key.speciality} </Card.Text>
              <Card.Text> City : {key.city} </Card.Text>
            <Button variant="primary" className="w-100" onClick={()=>{navigate(`/getappointment/${key._id}`)}}>Get Appointment</Button>
            </Card.Body>
          </Card>
            </>
        )
    })
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" 
           style={{ minHeight: "25vh" }}> 
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
