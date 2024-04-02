import React,{useContext, useEffect, useRef,useState} from 'react';
import {useParams} from 'react-router-dom';
import '../styles/TourDetails.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';

import { BASE_URL } from '../utils/config.js';
import useFetch from '../hooks/useFetch.js';


import { AuthContext } from '../context/AuthContext.js';
import ClipLoader from "react-spinners/ClipLoader";


const TourDetails = () => {
  const {id} = useParams();

  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);

  const {user} = useContext(AuthContext)

  // fetch data from database
  const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)

  const {photo, title, desc, price, reviews, city, distance, maxGroupSize,address} = tour;

  const totalRating = reviews?.reduce((acc,item)=>acc+item.rating,0);
  const avgRating = totalRating === 0 ? "" : totalRating === 1 ? totalRating : (totalRating/reviews?.length).toFixed(1);

  // format date
  const options = {days:'numeric',month:'long',year:'numeric'};

  // submit request to the server
  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;

    try {
      if(!user || user === undefined || user === null){
        alert('please sign in');
      }

      const reviewObj = {
        username : user?.username,
        reviewText,
        rating : tourRating
      }

      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      });

      await res.json();
      if(!res.ok) {
        alert('review not submited..!');
      }else{
        alert('review submited..!');
      }
      
    } catch (error) {
      alert('unexpected error..!')
    }
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour]);

  return (
    <>
      <section>
        <Container>
          {
            loading && <ClipLoader 
            className='justify-content-between align-item-center'
              loading={loading}
              color={'#009999'}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
              />
          }
          {
            error && <h4 className='text-center pt-5'>{error}</h4>
          }
         {
          !loading && 
          !error && 
          <Row>
          <Col lg='8'>
            <div className='tour_content'>

              <img src={photo} alt="" />

              <div className='tour_info'>
                <h2>{title}</h2>
                <div className='d-flex align-items-center gap-5'>
                  <span className='tour_rating d-flex align-item-center gap-1'>
                    <i class="ri-star-fill" style={{'color':'var(--secondary-color)'}}></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? ("Not Rated"):(<span>({reviews?.length})</span>)}
                  </span>

                  <span>
                    <i class="ri-map-pin-fill" style={{'color':'var(--secondary-color)'}}></i>{address}
                  </span>
                </div>
                <div className="tour_extra-details">
                  <span><i className='ri-map-pin-2-line'></i>{city}</span>
                  <span><i className='ri-money-dollar-circle-line'></i> {price} /per person</span>
                  <span><i class="ri-map-pin-time-line"></i> {distance} k/m</span>
                  <span><i className='ri-group-line'></i>{maxGroupSize}</span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* ---------------------- tour reviews section --------------------- */}
              <div className="tour_reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>

                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-item-center gap-3 mb-4 rating_group'>
                    <span onClick={()=>setTourRating(1)}>1<i className='ri-star-s-fill'></i></span>
                    <span onClick={()=>setTourRating(2)}>2<i className='ri-star-s-fill'></i></span>
                    <span onClick={()=>setTourRating(3)}>3<i className='ri-star-s-fill'></i></span>
                    <span onClick={()=>setTourRating(4)}>4<i className='ri-star-s-fill'></i></span>
                    <span onClick={()=>setTourRating(5)}>5<i className='ri-star-s-fill'></i></span>
                  </div> 

                  <div className="review_input">
                    <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required/>
                    <button className='btn primary__btn text-white' type='submit'>Submit</button>
                  </div> 
                </Form>

                <ListGroup className='user_reviews'>
                  {
                    reviews?.map(review=>(
                       <div className='review_item'>
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleString('en-US' , options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>
                              {review.rating}<i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>
              </div>
              {/* ---------------------- tour reviews section end --------------------- */}
              
            </div>
          </Col>

          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
         }
        </Container>
      </section>
    </>
  );
}

export default TourDetails