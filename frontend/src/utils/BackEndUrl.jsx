// const BackEndUrl="http://localhost:8000"
// export default BackEndUrl;

const BackEndUrl = import.meta.env.VITE_BACKEND_URL || "https://doctor-appointment-system-2-8l6h.onrender.com";
export default BackEndUrl;
