import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/ThankYou.css';
import NewsLetter from '../shared/NewsLetter';

const ThankYou = () => {
  return (
    <>
      <section>
        <Container>
            <Row>
                <Col lg='12' className='pt-5 text-center'>
                    <div className="thank_you">
                        <span><i class="ri-chechbox-circle-line"></i></span>
                        <h1 className="mb-3 fw-semibold">Thank You</h1>
                        <h3 className="mb-4">Your tour is booked.</h3>

                        <Link to='/tours'>
                            <Button className='btn primary__btn w-25'>Back to home</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default ThankYou;
