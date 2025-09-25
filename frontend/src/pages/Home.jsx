
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import BackEndUrl from "../utils/BackEndUrl"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
 


const Home = () => {
  const [mydata,setMydata]=useState([]);
  const navigate=useNavigate();
   const [showModal, setShowModal] = useState(false);
   const [selectedTreatment, setSelectedTreatment] = useState(null);

const treatments = [
  { title: "Cardiology", desc: "Heart & blood vessels treatment", video: "https://cdn.pixabay.com/video/2016/07/25/3995-176277710_large.mp4",
     details: `Cardiology focuses on diagnosing and treating diseases of the heart and blood vessels. 
    Cardiologists manage conditions such as coronary artery disease, heart attacks, heart failure, 
    arrhythmias, and high blood pressure. Treatment may include lifestyle changes, medications, 
    and interventional procedures like angioplasty or stent placement. Regular monitoring and 
    preventive care are essential for maintaining heart health.`
   },
  { title: "Dermatology", desc: "Skin & cosmetic care", video: "https://media.istockphoto.com/id/2219761302/video/close-up-of-a-scalp-hair-loss-procedure-for-a-young-woman-using-a-modern-hydrofashion-device.mp4?s=mp4-640x640-is&k=20&c=7ETYoR6kTXlUAGY3pX0saqaW_Prto1y1D6PUP4Ddps0=",
     details: `Dermatology is the branch of medicine focused on the health of the skin, hair, and nails. 
    Dermatologists treat conditions like acne, eczema, psoriasis, skin infections, and skin cancers. 
    They also provide cosmetic treatments such as laser therapy, chemical peels, and anti-aging solutions. 
    Proper skin care and early diagnosis can prevent serious complications.`
   },
  
  { title: "Neurology", desc: "Brain & nervous system care", video: "https://cdn.pixabay.com/video/2016/08/11/4363-178617247_large.mp4",
     details: `Neurology deals with disorders of the nervous system, including the brain, spinal cord, 
    and peripheral nerves. Neurologists treat conditions like stroke, epilepsy, Parkinson's disease, 
    multiple sclerosis, and migraines. They use a combination of diagnostic tests, medications, 
    and rehabilitation therapies to help patients manage and improve neurological function.`
   },
  { title: "Orthopedics", desc: "Bone & joint treatments", video: "https://media.istockphoto.com/id/1817051148/video/abstract-4k-animation-of-ostheoarthritis-and-knee-pathologies.mp4?s=mp4-640x640-is&k=20&c=4kTuhI2RdLFG5TGOJydNQ1EZq3nMJhbP1e6IukKDPug=",
     details: `Orthopedics focuses on the musculoskeletal system, including bones, joints, ligaments, 
    tendons, and muscles. Orthopedic surgeons treat fractures, arthritis, sports injuries, and deformities. 
    They provide surgical and non-surgical treatments, including joint replacement, physical therapy, 
    and rehabilitation programs, to restore mobility and improve quality of life.`
   }
];


  const loadData=async()=>{
   let api=`${BackEndUrl}/doctor/doctorinfo`;
   try {
    const response= await axios.get(api)
    console.log(response)
    setMydata(response.data)
   } catch (error) {
    console.log(error)
   }
  }

  useEffect(()=>{
    loadData();
  },[])

  const ans= mydata.map((key)=>{
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

             {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTreatment?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedTreatment?.details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  })
  return (
    <>
 {/* 🔹 Video Section */}
      <div className="video-section">
        <video
          src="https://cdn.pixabay.com/video/2020/12/10/58857-489663415_large.mp4"
          autoPlay
          loop
          muted
          className="background-video"
        />
        
        {/* 🔹 Stylish Heading */}
        <div className="video-heading">
          <h2>Connecting Doctors & Patients Seamlessly</h2>
        </div>
      </div>

{/* 🔹 Treatments Section */}
<h2 className="custom-heading text-center my-4">Our Treatments</h2>

<div className="cards-wrapper container my-4">
  {treatments.map((t, i) => (
    <Card key={i} className="shadow h-100">
      <video
        src={t.video}
        autoPlay
        loop
        muted
        style={{ height: "220px", objectFit: "cover", width: "100%", borderRadius: "5px" }}
      />
      <Card.Body>
        <Card.Title>{t.title}</Card.Title>
        <Card.Text>{t.desc}</Card.Text>
        <Button variant="info"  className="w-100"
                onClick={() => { setSelectedTreatment(t); setShowModal(true); }}>Learn More</Button>
      </Card.Body>
    </Card>
  ))}
</div>


{/* 🔹 Ab heading aur cards niche */}
<h2 className="custom-heading text-center my-4">Our Doctors</h2>
<div className="heading-underline mx-auto"></div>

<div className="cards-wrapper container my-4">
  {ans}
</div>

</>
  )
}
export default Home;
