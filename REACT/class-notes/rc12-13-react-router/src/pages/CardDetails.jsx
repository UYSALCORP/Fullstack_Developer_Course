import React from "react";
import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import data from "../data";

const CardDetails = () => {
    /* //! 1.Yol */
  // const { name } = useParams();
  // console.log(name);

  // //! 2. Yol | Kısa Yol
  const { state:{a} } = useLocation()
  return (
    <div className="container text-center mt-4">
      {/* {data.map(
        (a) =>
          a.name === name && ( */}
            <div>
              <h3>{a.name}</h3>
              <img src={a.img} alt="" width="300px" />
              <h3>{a.text} </h3>
              <h4>{a.yorum} </h4>
              <div>
                <button className="btn btn-warning">GO BACK</button>
                <button className="btn btn-primary">GO HOME</button>
              </div>
            </div>
          {/* )
      )} */}
    </div>
  );
};

export default CardDetails;
