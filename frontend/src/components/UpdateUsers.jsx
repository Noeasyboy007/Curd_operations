import { } from 'react'
import { Link } from "react-router-dom"
const UpdateUsers = () => {
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form action="">
                    <h2 className='fw-bold text-md-center text-warning '>UPDATE USER</h2>
                    <Link to='/' className='btn btn-danger fw-bold'>HOME</Link>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type='text' className='form-control' placeholder='Enter your Name' />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' className='form-control' placeholder='Enter your Email' />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Age</label>
                        <input type='text' className='form-control' placeholder='Enter your Age' />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Address</label>
                        <textarea
                            placeholder='Enter your address'
                            className='form-control'
                            id='exampleFormControlTextarea1'
                            rows='3'
                        ></textarea>
                    </div>

                    <button className='btn btn-warning fw-bold'>Update</button>

                </form>
            </div>
        </div>
    )
}

export default UpdateUsers
