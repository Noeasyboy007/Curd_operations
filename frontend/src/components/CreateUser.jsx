import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { toast } from 'react-hot-toast';

const CreateUser = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [address, setAddress] = useState()

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/users/create", { name, email, age, address });
      console.log("User created successfully:", response.data);
      toast.success('User created successfully!');
      navigate("/")   //Redirect home page
    } catch (error) {
      console.error(error);
      toast.error('Failed to create user!');
    }
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>

        <form onSubmit={submit}>

          <h2 className='fw-bold text-md-center text-primary '>ADD USER</h2>
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
              onChange={(e) => setAge(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor=''>Address</label>
            <textarea
              placeholder='Enter your address'
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
              value={address}
              onChange={(e) => setAddress(e.target.value)} />
          </div>

          <button className='btn btn-success fw-bold'> Submit</button>

        </form>
      </div>
    </div>
  )
}

export default CreateUser
