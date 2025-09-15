import { Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Header from "./components/Header"
import Footer from "./components/Footer"


const Layout = () => {
  return (
    <>
      <Container fluid>

        <Header/>
     
        <Outlet />
        <Footer />

      </Container>
   
    </>
  )
}

export default Layout