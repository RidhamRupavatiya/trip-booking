import React, { useState, useContext } from 'react';

import swal from 'sweetalert';

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import {Link,useNavigate} from 'react-router-dom';
import '../styles/login.css';

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

import { AuthContext } from '../context/AuthContext.js';
import { BASE_URL } from '../utils/config.js';

const Register = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleChange = e =>{
    setCredentials(prev => ({...prev,[e.target.id]:e.target.value}));
  };

  const handleClick = async e => {
    e.preventDefault();
    
    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(credentials)
      }
      )
      const result = await res.json()

      if(!res.ok) alert(result.message)

      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')
      

    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
<section style={{ marginTop: '20px' }}>
  <Row>
    <Col lg='8' className='m-auto'>
      <div className="login_container d-flex justify-content-between">
        <div className="login_img">
          <img src={registerImg} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        <div className="login_form" style={{ marginLeft: '20px' }}>
          <div className="user" style={{ marginBottom: '10px' }}>
            <img src={userIcon} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Register</h2>

          <Form onSubmit={handleClick}>
            <FormGroup style={{ marginBottom: '15px' }}>
              <input
                type="text"
                placeholder='UserName'
                required
                id="username" 
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: '15px' }}>
              <input
                type="text"
                placeholder='Email'
                required
                id="email" 
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </FormGroup>
            <FormGroup style={{ marginBottom: '15px' }}>
              <input
                type="password"
                placeholder='Password'
                required
                id="password" 
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </FormGroup>

            <Button
              className='btn secondary__btn auth_btn'
              type='submit'
              onClick={handleClick}
              style={{ width: '100%', 
              padding: '10px', 
              backgroundColor: '#007bff', 
              border: 'none', borderRadius: '4px', 
              color: '#fff', fontSize: '16px', 
              cursor: 'pointer', 
              transition: 'background-color 0.3s ease' }}
            >
              Create Account
            </Button>
          </Form>

          <p style={{ marginTop: '20px', fontSize: '14px' }}>Already have an account? <Link to='/login' style={{ color: '#007bff' }}>Login</Link></p>
        </div>
      </div>
    </Col>
  </Row>
</section>
    </>
  )
}

export default Register
