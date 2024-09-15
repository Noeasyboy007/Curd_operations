import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"

const UpdateUsers = () => {
    const { id } = useParams();

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [address, setAddress] = useState()

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/users/readById/${id}`);
                const user = response.data;
                setName(user.name);
                setEmail(user.email);
                setAge(user.age);
                setAddress(user.address);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUser();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/users/update/${id}`, { name, email, age, address });
            // Navigate back to the home page after successful update
            navigate('/');
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>

                <form onSubmit={handleUpdate}>

                    <h2 className='fw-bold text-md-center text-warning '>UPDATE USER</h2>
                    <Link to='/' className='btn btn-danger fw-bold'>HOME</Link>

                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type='text' className='form-control' placeholder='Enter your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' className='form-control' placeholder='Enter your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Age</label>
                        <input type='text' className='form-control' placeholder='Enter your Age'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Address</label>
                        <textarea
                            placeholder='Enter your address'
                            className='form-control'
                            id='exampleFormControlTextarea1'
                            rows='3'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <button className='btn btn-warning fw-bold'>Update</button>

                </form>
            </div>
        </div>
    )
}

export default UpdateUsers
