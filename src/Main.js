import React, { useState } from 'react'

export default function Main() {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')

  const [eusername, seteusername] = useState('')
  const [eemail, seteemail] = useState('')
  const [epassword, setepassword] = useState('')
  const [econfirmpassword, seteconfirmpassword] = useState('')

  const [ucolor, setucolor] = useState('')
  const [ecolor, setecolor] = useState('')
  const [pcolor, setpcolor] = useState('')
  const [cpcolor, setcpcolor] = useState('')

  function validate() {
    if (username.length > 8) {
      seteusername('')
      setucolor('green')
    } else {
      seteusername('username must be 8 letters long')
      setucolor('red')
    }

    if (email.length > 8) {
      seteemail('')
      setecolor('green')
    } else {
      seteemail('email must contain @, 8 letters long ')
      setecolor('red')
    }

    if (password.length > 8) {
      setepassword('')
      setpcolor('green')
    } else {
      setepassword('password must be 8 letters long and should include .  ')
      setpcolor('red')
    }

    if (confirmpassword.length > 8) {
      seteconfirmpassword('')
      setcpcolor('green')
    } else {
      seteconfirmpassword(
        'password must be 8 letters long and should include .  '
      )
      setcpcolor('red')
    }
  }

  return (
    <div>
      <div className='row justify-content-center'>
        <div
          className='col-md-6 shadow-lg p-3 mb-5 bg-white rounded'
          style={{
            marginTop: '10%',
            backgroundColor: 'white',
          }}
        >
          <h1> Form Validation </h1>
          <input
            type='text'
            placeholder='username'
            className='form-control'
            style={{
              width: '80%',
              marginTop: '2%',
              marginLeft: '10%',
              borderColor: ucolor,
            }}
            value={username}
            onChange={(e) => {
              setusername(e.target.value)
            }}
          ></input>
          <p style={{ color: 'red' }}>{eusername}</p>
          <input
            type='text'
            placeholder='email'
            className='form-control'
            style={{
              width: '80%',
              marginTop: '1%',
              marginLeft: '10%',
              borderColor: ecolor,
            }}
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
          ></input>
          <p style={{ color: 'red' }}>{eemail}</p>
          <input
            type='text'
            placeholder='password'
            className='form-control'
            style={{
              width: '80%',
              marginTop: '1%',
              marginLeft: '10%',
              borderColor: pcolor,
            }}
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
          ></input>
          <p style={{ color: 'red' }}>{epassword}</p>

          <input
            type='text'
            placeholder='confirm password'
            className='form-control'
            style={{
              width: '80%',
              marginTop: '1%',
              marginLeft: '10%',
              borderColor: cpcolor,
            }}
            value={confirmpassword}
            onChange={(e) => {
              setconfirmpassword(e.target.value)
            }}
          ></input>
          <p style={{ color: 'red' }}>{econfirmpassword}</p>

          <button
            className='btn btn-success'
            onClick={validate}
            style={{ width: '12%', marginTop: '1%', marginBottom: '4%' }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}
