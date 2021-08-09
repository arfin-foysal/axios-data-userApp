import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AddUser = () => {
   let history= useHistory()
    const [user, setuser] = useState({
          name:"",
          username:"",
          email:"",
          phone:"",
          website:""
    })


    const {name,username,email,phone,website}=user
         
      const onHandelSubmit=(e)=>{  
       setuser({...user,[e.target.name]:[e.target.value]})
      }
        
      const SubmitH = async(e)=>{
       e.preventDefault()

       await axios.post("http://localhost:3003/users",user)
        history.push("/")

      }
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={(e)=>SubmitH(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e)=>onHandelSubmit(e)}
                
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={(e)=>onHandelSubmit(e)}
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={(e)=>onHandelSubmit(e)}
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={(e)=>onHandelSubmit(e)}
              />
            </div>
            <br/>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                value={website}
                onChange={(e)=>onHandelSubmit(e)}
              />
            </div>
            <br/>
            <button className="btn btn-success btn-block">Add User</button>
          </form>
        </div>
      </div>

       
    )
}

export default AddUser
