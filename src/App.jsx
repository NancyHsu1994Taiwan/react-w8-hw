import { Outlet } from "react-router-dom";
import Navbar from "./components/front/Navbar";
import Footer from "./components/front/Footer";
function App() {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
