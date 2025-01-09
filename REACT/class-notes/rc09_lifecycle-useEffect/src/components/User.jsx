import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    dob: "",
    picture: "",
    location: "",
    cell: "",
  });
  const getUser = async () => {
    try {
      const result = await axios.get("https://randomuser.me/api/");
      setUserData(result.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  //? componentDidMount
  useEffect(() => {
    const timerId = setInterval(getUser, 5000)
    getUser();
    //? componentWillUnmount
    return () => {
        console.log("Timer iptal edildi.")
        clearInterval(timerId)
    }
  }, []); //? Dependency array

  return (
    <div>
      <img className="rounded-circle m-4" src={userData.picture.large} alt="" />
      <p>Hi, My name is: </p>
      {/* //* İlk renderda state değeri initial değer olacağı için hata almamak adına ya state'e initial değer vermeliyiz ya da optional chaning "?" kontrolü yapmalıyız! */}
      <h2>{userData?.name.first + " " + userData?.name.last}</h2>
      <h4>email:{userData.email}</h4>
      <h5>birth:{userData.dob.date}</h5>
      <h5>city:{userData.location.city}</h5>
      <h5>tel no:{userData.cell}</h5>
      <button onClick={getUser} className="btn btn-danger">New User</button>
    </div>
  );
};

export default User;
