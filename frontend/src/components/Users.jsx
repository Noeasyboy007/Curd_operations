import { useState } from 'react'
import { Link } from "react-router-dom"

const Users = () => {

    const [users, setUsers] = useState([{
        Name: "yourSelf",
        Email: "email@yourSelf.com",
        Age: 20,
        Address: "yourSelf Address"
    }])
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
            <div className="w-50 bg-white rounded p-3">
                <Link to='/create' className='btn btn-success fw-bold '>+Add</Link>
                <table className="table">
                    <thead>
                        {/* for table row */}
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {/* for table colum */}
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr key={user}>
                                        <td>{user.Name}</td>
                                        <td>{user.Email}</td>
                                        <td>{user.Age}</td>
                                        <td>{user.Address}</td>
                                        <td>
                                            <button className='btn btn-danger ' onClick={() => deleteUser(user.Name)}>Delete</button>
                                            <button className='btn btn-warning' onClick={() => eaditUser(user.Name)}>Eadit</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
