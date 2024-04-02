import React, {useState,useEffect} from 'react'
import CommonSection from '../shared/CommonSection';

import '../styles/Tour.css';
import TourCard from '../shared/TourCard.jsx';
import SearchBar from '../shared/SearchBar.jsx';
import NewsLetter from '../shared/NewsLetter.jsx';
import { Container, Col, Row } from 'reactstrap';

import useFetch from '../hooks/useFetch.js';
import { BASE_URL } from '../utils/config.js';


import 'react-loading-skeleton/dist/skeleton.css';
import CardSkeleton from '../components/CardSkeleton/CardSkeleton';

const Tours = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`);
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(()=>{
    const pages = Math.ceil(tourCount/8);
    setPageCount(pages);
    window.scrollTo(0,0)
  },[page,tourCount,tours])

  return (
  <>
    {/* -------------------- Common Section -------------------- */}
    <CommonSection title={"All Tours"}/>
    {/* -------------------- Common Section -------------------- */}


    {/* -------------------- Search Bar -------------------- */}
    <section>
      <Container>
        <Row>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/* -------------------- Search Bar -------------------- */}


    {/* -------------------- Tours List -------------------- */}
    <section className='pt-0'>
      <Container>
      {loading && <CardSkeleton cards={8}/>}
      {error && <h4 className='text-center pt-5'>{error}</h4>}
      {
      !loading && !error && 
        <Row>
          {
            tours?.map(tour => (
              <Col lg='3' className='mb-4' key={tour._id}>
                <TourCard tour={tour} />
             </Col> 
            ))}

          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number => (
                <span
                key={number} 
                onClick={()=>setPage(number)}
                className={page === number ? "active_page" : ""}>
                  {number + 1}
                </span>
              ))}
            </div>
          </Col>
        </Row>
        }
      </Container>
    </section>
    {/* -------------------- Tours List -------------------- */}

    <NewsLetter />
  </>
  );
}

export default Tours