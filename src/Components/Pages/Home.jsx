import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
    const [users, setusers] = useState([]);

    useEffect(() => {
        loadeData();
    }, [])

    const loadeData = async () => {
        const result = await axios.get("http://localhost:3003/users")
        setusers(result.data.reverse())
    
    }

    const deleteUser = async (id) => {
       await axios.delete(`http://localhost:3003/users/${id}`)

       loadeData();
    
    }
  
  

    return (

        <div className="container">
            
            <div>
                <h2>Home Page</h2>
                <table className="table border shadow 0">
                    <thead className=" table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                  
                      {users.map((user,index)=>(<tr>
                    
                          <th scope="row">{index+1}</th>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.website}</td>
                          <td> <Link className="btn btn-primary" to={`/Users/user/${user.id}`} > view </Link>
                                <Link to={`/users/edit/${user.id}`}className="btn btn-warning me-2 ms-2"> Edit </Link>
                                <Link className="btn btn-danger" onClick={()=>deleteUser(user.id)}> Delete </Link>
                          </td>
                        </tr>
            ))}

                    </tbody>
                </table>
                
                </div>
        </div>
    )
}

export default Home

