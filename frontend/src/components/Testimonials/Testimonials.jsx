import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        slidesToShow: 3,
        swipeToSlide:true,
        autoplaySpeed:2000,

        reaponsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll:1,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            },
        ]
    }
  return (
    <>
      <Slider {...settings}>
        <div className='testinomial py-4 px-3'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus odit aperiam aspernatur, voluptas cum fugit magnam laborum quam quod, voluptate saepe fuga asperiores ab, sequi velit nemo placeat ad?
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>John Deo</h6>
                    <p>Costomer</p>
                </div>
            </div>
        </div>

        <div className='testinomial py-4 px-3'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus odit aperiam aspernatur, voluptas cum fugit magnam laborum quam quod, voluptate saepe fuga asperiores ab, sequi velit nemo placeat ad?
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                    <p>Costomer</p>
                </div>
            </div>
        </div>

        <div className='testinomial py-4 px-3'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus odit aperiam aspernatur, voluptas cum fugit magnam laborum quam quod, voluptate saepe fuga asperiores ab, sequi velit nemo placeat ad?
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>John mone</h6>
                    <p>Costomer</p>
                </div>
            </div>
        </div>

        <div className='testinomial py-4 px-3'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus odit aperiam aspernatur, voluptas cum fugit magnam laborum quam quod, voluptate saepe fuga asperiores ab, sequi velit nemo placeat ad?
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>John Deo</h6>
                    <p>Costomer</p>
                </div>
            </div>
        </div>

        <div className='testinomial py-4 px-3'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus odit aperiam aspernatur, voluptas cum fugit magnam laborum quam quod, voluptate saepe fuga asperiores ab, sequi velit nemo placeat ad?
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                    <p>Costomer</p>
                </div>
            </div>
        </div>

        <div className='testinomial py-4 px-3'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus odit aperiam aspernatur, voluptas cum fugit magnam laborum quam quod, voluptate saepe fuga asperiores ab, sequi velit nemo placeat ad?
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>John mone</h6>
                    <p>Costomer</p>
                </div>
            </div>
        </div>
      </Slider>
    </>
  );
}

export default Testimonials
