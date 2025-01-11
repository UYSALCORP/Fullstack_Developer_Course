import React from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Teacher from "./pages/Teacher";
import CourseCard from "./pages/CourseCard";
import ContactForm from "./pages/ContactForm";
import MyNavbar from "./components/MyNavbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/teacher" element={<Teacher/>}/>
          <Route path="/courses" element={<CourseCard/>}/>
          <Route path="/contact" element={<ContactForm />}/>
          
          {/*
          <CourseCard />
           */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
