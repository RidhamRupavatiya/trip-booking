import React from 'react';
import './NewsLetter.css';
import { Container, Col, Row } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const NewsLetter = () => {
  return (
    <>
      <section className='newsletter'>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='newsletter_content'>
                <h2>Subscribe now to get useful traveling information.</h2>

                <div className='newsletter_input'>
                  <input type="email" placeholder='Enter your email' />
                  <button className='btn newsletter_btn'>Subscribe</button>
                </div>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Doloribus nesciunt hic repellat quia eum sequi.</p>
              </div>
            </Col>
            <Col lg='6'>
              <div className="newsletter_img">
                <img src={maleTourist} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default NewsLetter