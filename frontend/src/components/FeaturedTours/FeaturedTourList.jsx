import React from 'react'
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';

import useFetch from '../../hooks/useFetch.js';
import { BASE_URL } from '../../utils/config.js';

import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from '../CardSkeleton/CardSkeleton';

const FeaturedTourList = () => {

  const {data: featuredTours, loading,error} = useFetch(
    `${BASE_URL}/tours/search/getFeaturedTours`
    );


  return (
    <>
      {
        loading && <CardSkeleton cards={8}/>
      }
      {
        error && <h4>{error}</h4>
      }
      {
        !loading &&
        !error &&
        featuredTours.map(tour=>(
            <Col lg='3' className='mb-4' key={tour._id}>
                <TourCard tour={tour}/>
            </Col>
        ))
      }
    </>
  );
}

export default FeaturedTourList
