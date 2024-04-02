import React,{useRef, useEffect, useContext} from 'react';
import "../../App";
import './Header.css';
import { Container, Row , Button} from 'reactstrap';
import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom';
import Travellogo from '../../assets/images/TravelLogo.png';

import { AuthContext } from '../../context/AuthContext.js';

// const nav_links = [
//   {
//     path : '/home',
//     display : 'Home'
//   },
//   {
//     path : '/about',
//     display : 'About'
//   },
//   {
//     path : '/tours',
//     display : 'Tours'
//   },
// ]

const Header = () => {

  const headerRef = useRef(null);
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);

  const logOut = () =>{
    dispatch({type:'LOGOUT'})
    navigate('/');
  }

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()
    
    return window.removeEventListener('scroll',stickyHeaderFunc)
  })

  return (
      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav_wrapper d-flex align-items-center justiyfy-content-between">
              {/* -------------logo Start-------------- */}
              <div className="travel_logo">
                <img src={Travellogo} alt="" />
              </div>
              {/* -------------logo End-------------- */}

              {/*------menu Start-------------*/}
              <div className='navigation'>
                <ul className='menu d-flex align-items-center gap-5'>
                  {/* {nav_links.map((item,index)=>(
                    <li className='nav_item' key={index}>
                      <NavLink to={item.path} className={navClass=>
                        navClass.isActive ? "active_link" : "" }>{item.display}
                      </NavLink>
                    </li>
                  ))} */}
                  <li className='nav_item'>
                    <NavLink to='/home' className={navClass=>navClass.isActive ? "active_link" : ""}>Home</NavLink>
                  </li>
                  <li className='nav_item'>
                    <NavLink to='/tours' className={navClass=>navClass.isActive ? "active_link" : ""}>Tours</NavLink>
                  </li>
                  <li className='nav_item'>
                    <NavLink to='/about' className={navClass=>navClass.isActive ? "active_link" : ""}>About</NavLink>
                  </li>
                </ul>
              </div>
              {/*------menu end-------------*/}
              <div className='nav__right d-flex align-items-center gap-4 '>
                <div className='nav__btns d-flex align-items-center gap-4 '>

                  {
                    user? <>
                      <h5 className='mb-0'>{user.username}</h5>
                      <Button className='btn danger__btn' onClick={logOut}>LogOut</Button>
                    </> : <>
                      <Button className='btn secondary__btn'>
                        <Link to='/login'>Login</Link>
                      </Button>
                      <Button className='btn primary__btn'>
                        <Link to='/register'>Register</Link>
                      </Button>
                    </>

                  }
                </div>
                <span className='mobile_menu'>
                  <i class="ri-menu-line"></i>
                </span>

              </div>
            </div>
          </Row>
        </Container>
      </header>
  );
}

export default Header