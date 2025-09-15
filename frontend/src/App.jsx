import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Display from "./pages/Display";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientList from "./pages/PatientList";
import SearchDoctor from "./pages/SearchDoctor";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> 
            <Route path="display" element={<Display />} /> 
             <Route path="/searchdoctor" element={<SearchDoctor />} /> 
          </Route>
        </Routes>

        <Routes>
          <Route path="doctordashboard" element={<DoctorDashboard />}>
             <Route path="patientlist" element={<PatientList />} /> 
    
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
