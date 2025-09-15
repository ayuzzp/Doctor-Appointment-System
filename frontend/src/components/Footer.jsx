
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit"

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      {/* Social Links */}
      <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
        <div className="me-4 d-none d-lg-block">
          <span>Connect with us:</span>
        </div>
        <div>
          <a href="#" className="me-3 text-reset"><MDBIcon fab icon="facebook-f" /></a>
          <a href="#" className="me-3 text-reset"><MDBIcon fab icon="twitter" /></a>
          <a href="#" className="me-3 text-reset"><MDBIcon fab icon="instagram" /></a>
          <a href="#" className="me-3 text-reset"><MDBIcon fab icon="linkedin" /></a>
        </div>
      </section>

      {/* Footer Content */}
      <MDBContainer className="mt-4">
        <MDBRow className="mt-3">
          <MDBCol md="4" className="mb-3">
            <h6 className="fw-bold mb-2">
              <MDBIcon icon="stethoscope" className="me-2" />
              Doctor Management
            </h6>
            <p>
              A simple system to manage doctors, patients and appointments
              efficiently.
            </p>
          </MDBCol>

          <MDBCol md="4" className="mb-3">
            <h6 className="fw-bold mb-2">Quick Links</h6>
            <p><a href="/" className="text-reset">Home</a></p>
            <p><a href="/about" className="text-reset">About</a></p>
            <p><a href="/contact" className="text-reset">Contact</a></p>
          </MDBCol>

          <MDBCol md="4" className="mb-3">
            <h6 className="fw-bold mb-2">Contact</h6>
            <p><MDBIcon icon="home" className="me-2" /> Bhopal, India</p>
            <p><MDBIcon icon="envelope" className="me-2" /> support@dms.com</p>
            <p><MDBIcon icon="phone" className="me-2" /> +91 9876543210</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Bottom Note */}
      <div className="text-center p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © {new Date().getFullYear()} Doctor Management | All Rights Reserved
      </div>
    </MDBFooter>
  )
}

export default Footer
