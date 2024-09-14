import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users/read');
                if (Array.isArray(response.data)) {
                    setUsers(response.data);
                } else {
                    console.error("API response is not an array:", response.data);
                    setUsers([]); // Set users as an empty array if response is not an array
                }
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchUsers();
    }, [])

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
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <Link to='/update' className='btn btn-success fw-bold'>Eadit</Link>
                                            <button className='btn btn-danger fw-bold' onClick={() => deleteUser(user.Name)}>Delete</button>
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
