import React from 'react'

const CreateUser = () => {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form action="">
          <h2 className='fw-bold text-md-center text-primary '>ADD USER</h2>
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

          <button className='btn btn-success fw-bold'> Submit</button>

        </form>
      </div>
    </div>
  )
}

export default CreateUser
