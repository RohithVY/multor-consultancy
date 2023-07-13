import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./App.css";
import Form from "./components/form";
import VisitationVideo from "./components/VisitationVideo";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <VisitationVideo />
      <Testimonials />
      <Features />
      <About />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
