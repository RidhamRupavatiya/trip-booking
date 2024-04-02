import React, { useState,useContext} from 'react'

import { Container,Row, Col, Form, FormGroup, Button } from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/login.css'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

import { AuthContext } from '../context/AuthContext.js';
import { BASE_URL } from '../utils/config.js';

const Login = () => {

  const [credentials, setCredentials] = useState({
    email:undefined,
    password:undefined
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleChange = e =>{
    setCredentials(prev => ({...prev,[e.target.id]:e.target.value}));
  };


  const handleClick = async e => {
    e.preventDefault();

    dispatch({type:'LOGIN_START'})
     
    try {
      const res = await fetch(`${BASE_URL}/auth/login`,
      {
        method:'post',
        headers : {
          "content-type":"application/json",
        },
        credentials:'include',
        body: JSON.stringify(credentials),
      })

      const result = await res.json()

      if(!res.ok){
        alert(result.message)
      }else{
        console.log(result.data);
        dispatch({type:'LOGIN_SUCCESS',payload:result.data})
        navigate('/')
      }
      
    } catch (error) {
      dispatch({type:'LOGIN_FAILURE',payload:error.message})
    }
  }

  return (
    <>
<section style={{ marginTop: '20px' }}>
  <Row>
    <Col lg='8' className='m-auto'>
      <div className="login_container d-flex justify-content-between">
        <div className="login_img">
          <img src={loginImg} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        <div className="login_form" style={{ marginLeft: '20px' }}>
          <div className="user" style={{ marginBottom: '10px' }}>
            <img src={userIcon} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Login</h2>

          <Form onSubmit={handleClick}>
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
              style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', border: 'none', borderRadius: '4px', color: '#fff', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
            >
              Login
            </Button>
          </Form>

          <p style={{ marginTop: '20px', fontSize: '14px' }}>Don't have an account? <Link to='/register' style={{ color: '#007bff' }}>Create</Link></p>
        </div>
      </div>
    </Col>
  </Row>
</section>
    </>
  )
}

export default Login
