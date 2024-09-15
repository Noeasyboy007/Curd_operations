import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users/read');
                // console.log(response.data)
                setUsers(response.data.users);

            }
            catch (error) {
                console.error(error);
            }
        }
        fetchUsers();
    }, [])

    
    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/users/delete/${id}`);
            // Remove the deleted user from the local state
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
            <div className="w-80 bg-white rounded p-3">
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
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success fw-bold'>Edit</Link>
                                        <button className='btn btn-danger fw-bold' onClick={() => deleteUser(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
