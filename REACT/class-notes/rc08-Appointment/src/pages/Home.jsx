import React, { useState } from "react";

import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import { doctorData, hastaData } from "../helper/Data"

const Home = () => {

  let [doctors, setDokctors] = useState(doctorData)
  const [hastalar, setHastalar] = useState(hastaData)

  return (
    <div style={{ display: "block" }}>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div className="dr">
            {doctors.map((dr)=>(
              <div>
              <img
                src={dr.doctorImg}
                width="180px"
                height="150px"
                className="doctorBtn"
                alt=""
                style={{backgroundColor:"aqua"}}
              />
              <h4 style={{background:"aqua", borderLeft:"10px solid blue"}}>{dr.doctorName}</h4>
            </div>
            ))}
            
          </div>
        </header>

        {/* <AddPatient /> */}
      </div>

      <PatientList hastalar={hastalar}/>
    </div>
  );
};

export default Home;
