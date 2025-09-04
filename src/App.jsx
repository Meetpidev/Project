import Header from "./common/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Choose from "./pages/Choose.jsx";
import Footer from "./common/Footer.jsx";
import AppFooter from "./common/AppFooter.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // or instant scroll with window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-Kryzen-Software-Solutions" element={<About />} />
        <Route path="/choose" element={<Choose />} />
     </Routes>
      <Footer />
      <AppFooter />
    </>
  )
}

export default App
