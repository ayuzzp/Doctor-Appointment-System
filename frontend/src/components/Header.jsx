import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, Button, Modal, Form,Image } from "react-bootstrap"
import BackEndUrl from "../utils/BackEndUrl"
import { ToastContainer,  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    const navigate=useNavigate();
    //registration-------------
     const [input, setInput] = useState({});
      const [image, setImage] = useState("");
  const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
 //login----------------
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)




  const handleInput = (e) => {
   let name= e.target.name
   let value= e.target.value
   setInput(values=>({...values,[name]:value}))
   console.log(input)

  }
  
   const handleImage=(e)=>{
       setImage(e.target.files[0]);
       console.log(e.target.files[0]);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api=`${BackEndUrl}/doctor/doctorsave`;     
    if (!image) return alert("Please select a Image");
 const formData = new FormData();
 formData.append("file", image);
 for (let x in input) {
      formData.append(x, input[x]);
    }
 try {
 const res = await axios.post(api, formData, {
 headers: { "Content-Type": "multipart/form-data" },
 });
 console.log(res);
  setShow(false);
  toast.info("You are Succesfully Registered!");
 } catch (err) {
 console.error(err);
 }
  }

  const loginSubmit=async(e)=>{
   e.preventDefault();
   let api=`${BackEndUrl}/doctor/doctorlogin`;
   try {
    const response= await axios.post(api,{email:email,password:password})
    console.log(response)
               localStorage.setItem("docname", response.data.doctorname);
           localStorage.setItem("docid", response.data._id);
    toast.success("Login Successfully");
     navigate("/doctordashboard");
   } catch (error) {
    console.log(error)
     toast.error("Login Failed"); 
   }
  }


  return (
    <>
     <Navbar expand="lg" className="bg-light px-3">
  <Container>
    {/* Navbar Brand with Logo */}
    <Navbar.Brand as={Link} to="/">
      <Image 
        src="https://cdn.pixabay.com/photo/2013/07/12/14/17/stethoscope-148159_1280.png" // yaha apna logo image daal do
        alt="Logo"
        style={{ height: "40px", width: "auto", objectFit: "contain" }}
        rounded
      />
    </Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="searchdoctor" className="d-flex align-items-center gap-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>Search</span>
        </Nav.Link>
        <Nav.Link as={Link} to="searchbycity" >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>SearchByCity</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>

      <div id="auth-buttons" className="d-flex gap-2">
        <Button variant="outline-info" size="sm" onClick={() => setShow(true)}>
          Register
        </Button>
        <Button variant="outline-info" size="sm" onClick={() => setShow1(true)}>
          Login
        </Button>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Doctor Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Specialization</Form.Label>
       <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
      <option>Open this select menu</option>
      <option value="Cardiologist">Cardiologist</option>
      <option value="Gastroenterologist">Gastroenterologist</option>
      <option value="Neurologist">Neurologist</option>
       <option value="Radiologist">Radiologist</option>
        <option value="General Physician">General Physician</option>
         <option value="ENT Specialist">ENT Specialist</option>
          <option value="Dentist">Dentist</option>
           <option value="Gynecologist">Gynecologist</option>
            <option value="Surgeon">Surgeon</option>
    </Form.Select>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city"  onChange={handleInput}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Clinic Address</Form.Label>
        <Form.Control type="text" name="address" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Doctor Image</Form.Label>
        <Form.Control type="file" name="file" onChange={handleImage}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact Number</Form.Label>
        <Form.Control type="text" name="contact" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"  name="email" onChange={handleInput}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


       <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" name="email1" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password1" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" onClick={loginSubmit} type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


        <ToastContainer/>
    </>
  )
}

export default Header
