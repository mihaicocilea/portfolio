import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import Layout from "./components/Layout/Layout";
import AboutPage from "./components/About/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutPage />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
