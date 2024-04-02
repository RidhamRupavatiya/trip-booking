import React from 'react';
import { Container,Row,Col } from 'reactstrap';

import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import SearchBar from '../shared/SearchBar';
import FeaturedTourList from '../components/FeaturedTours/FeaturedTourList';
import ServiceList from '../services/ServiceList';
import ImageGallery from '../components/ImageGallery/ImageGallery';
// import Subtitle from '../assets/shared/Subtitle';
import '../styles/Home.css';
import Testimonials from '../components/Testimonials/Testimonials';
import NewsLetter from '../shared/NewsLetter';

const Home = () => {
  return (
    <>
    {/* -------------------- Hero Section Start -------------------- */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                {/* <Subtitle subtitle={'Know Before You Go'}/> */}
                <h3 className='section__subtitle'>Know Before You Go</h3>
                <img src={worldImg} alt=''/>
              </div>
              <h1>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, a quos sapiente modi explicabo animi eos similique eveniet, nostrum eius quam? Non, ipsam. Illo, necessitatibus quasi. Corporis vitae error autem.
              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls autoPlay/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>

          {/* --------------- Search Bar --------------- */}
          <SearchBar/>
          {/* --------------- Search Bar --------------- */}
          
        </Row>
      </Container>
    </section>
    {/* ================ Service Section End =========================== */}

    {/* ================ Service Section Start =========================== */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>what we serve</h5>
            <h2 className='services__title'>We offer out best services</h2>
          </Col>
          {/* --------------- Servcices List ----------------- */}
          <ServiceList/>
          {/* --------------- Servcices List ----------------- */}
        </Row>
      </Container>
    </section>

    {/* ---------------- Feature Section Start ------------------------- */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            {/* <Subtitle subtitle={'Explore'} />  */}
            <h3 className='section__subtitle'>Explore</h3>
            <h2 className='featured__tour-title'>Our Feature Tours</h2>
          </Col>
          {/* ------- Feature List ------ */}
          <FeaturedTourList/>
          {/* ------- Feature List ------ */}
        </Row>
      </Container>
    </section>
    {/* ---------------- Feature Section End ------------------------- */}


    {/* -------------------- Experience Section Start ------------------ */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience_content">
                <h3 className='section__subtitle'>Experience</h3>
                <h2>With our all experience <br /> we will serve you </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Ut iure autem amet cumque sit.</p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter_box">
                  <span>2+</span>
                  <h6>Reguler Clients</h6>
                </div>
                <div className="counter_box">
                  <span>15+</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    {/* -------------------- Experience Section End ------------------ */}

    {/* ---------------------Gallery Section Start---------------------- */}
    <section>
      <Container>
      <Row>
        <Col lg='12'>
        <h3 className='section__subtitle'>Gallery</h3>
        <h2 className='gallery_title'>Visite our customer tour gallery</h2>
        </Col>
      </Row>
      <Col lg='12'>
        {/* -------------Image Gallery------------- */}
        <ImageGallery/>
        {/* -------------Image Gallery------------- */}
      </Col>
      </Container>
    </section>
    {/* ---------------------Gallery Section End---------------------- */}

    {/* ------------------Testimony Secction Start--------------------- */}
    <section>
      <Container>
        <Row>
          <Col>
            <h3 className='section__subtitle'>Fans Love</h3>
            <h2 className='testimonial_title'>what our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ------------------Testimony Secction End--------------------- */}

    {/* ------ News Letter ----- */}
    <NewsLetter />
    {/* ----- News Letter ---- */}
    </>
  );
}

export default Home