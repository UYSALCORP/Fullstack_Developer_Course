import React from 'react'
import axios from 'axios'

const User = () => {
    const getUser = async()=>{
       const result =  await axios.get("https://randomuser.me/api/")
       console.log(result)
    }
    getUser()
  return (
    <div>
      <img src="" alt="" />
      <p>Hi, My name is: </p>
      <h2>username</h2>
      <h4>email:</h4>
      <h5>birth:</h5>
      <h5>city:</h5>
      <h5>tel no:</h5>
      <button className='btn btn-danger'>New User</button>
    </div>
  )
}

export default User
