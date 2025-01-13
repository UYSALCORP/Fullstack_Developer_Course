import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import spinner from "../img/Loading_icon.gif"

const TeacherDetails = () => {
  //! Kısa Yol
  // const {state:{kisi}} = useLocation()
  //! Uzun Yol
  const { id } = useParams();
  const [kisi, setKisi] = useState({});
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setKisi(data))
      .catch((error)=>setError(true))
      .finally(()=>setLoading(false))
  }, [id]);

  if(error===true){
    return <NotFound/>
  } else if (loading){
    return (<div>
      <img src={spinner} alt="" />
    </div>)
  }

  return (
    <div className="container text-center mt-4">
      <div>
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${kisi.id}`}
          alt=""
          width="300px"
        />
        <h4>{kisi.username} </h4>
        <h5>{kisi.name} </h5>
        <h5>{kisi.phone} </h5>
        <h5>{kisi.website} </h5>
        <h5>{kisi.email} </h5>
      </div>
      <div>
        {/* //! 1.Yol */}
        <button onClick={()=>navigate("/teacher")} className="btn btn-warning">GO BACK</button>
        {/* //! 2.Yol | Kaç sayfa geriye gitmek istiyorsan o kadar -x */}
        {/* <button onClick={()=>navigate(-1)} className="btn btn-warning">GO BACK</button> */}
        <button onClick={()=>navigate("/")} className="btn btn-primary">GO HOME</button>
      </div>
    </div>
  );
};

export default TeacherDetails;
