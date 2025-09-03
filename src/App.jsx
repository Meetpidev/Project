import Header from "./common/Header.jsx";
import "./App.css";
import Footer from "./common/Footer.jsx";
import AppFooter from "./common/AppFooter.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-Kryzen-Software-Solutions" element={<About />} />
     </Routes>
      <Footer />
      <AppFooter />
    </>
  )
}

export default App
