
import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import BackEndUrl from "../utils/BackEndUrl";
const PatientList =()=>{
  const [mydata, setMydata] = useState([]);
  const loadData=async()=>{
         let api = `${BackEndUrl}/doctor/showpatientlist/?id=${localStorage.getItem("docid")}`;
         try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data);
         } catch (error) {
            console.log(error);
         } 
  }

  useEffect(()=>{
    loadData();
  }, []);

let i=0;
  const ans= mydata.map((key)=>{
     i++;
    return(
      <>
        <tr>
          <td>{i}</td>
          <td> {key.patientname} </td>
          <td> {key.deseases} </td>
          <td> {key.contactno} </td>
          <td> {key.address} </td>
          <td> {key.email} </td>
        </tr>
      
      </>
    )
  })
    return(
        <>
          <h2> Patient Detail </h2>
          <hr />
 <Table striped bordered hover style={{width:"90%"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Patient Name</th>
          <th>Deases</th>
          <th>Contact no</th>
          <th> Address</th>
          <th> Email</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
</Table>
        </>
    )
}
export default PatientList;