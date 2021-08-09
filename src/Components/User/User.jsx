import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const User = () => {
    const {id} = useParams()
    const [user, setuser] = useState({
          name:"",
          username:"",                                                                            
          email:"",
          phone:"",
          website:""
    })

    useEffect(() => {
        loadeData();
    }, [])

    const loadeData = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setuser(result.data)
    
    }
    return (
        <div >
            <div class="card  " style={{width: "18rem", textAlign:'center',marginLeft:"40%"}}>
  <div class="card-header">
    User Detels Informetion
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{user.name}</li>
    <li class="list-group-item">{user.username}</li>
    <li class="list-group-item">{user.email}</li>
    <li class="list-group-item">{user.phone}</li>
    <li class="list-group-item">{user.website}</li>
  </ul>
  <Link to="/" className="btn btn-success">Back To Home</Link>
</div>
        </div>
    )
}

export default User
