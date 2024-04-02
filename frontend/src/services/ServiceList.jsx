import React from 'react';
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
];


const ServiceList = () => {
  return (
    <>
    {
        serviceData.map((item,index)=>(
            <Col lg='3' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))
    }
    </>
  );
    // const FormatedServices = serviceData.map((items,index)=>{
    //     return (
    //         <>
    //         <div className='service__item'>
    //             <div className="service__img">
    //                 <img src={items.imgUrl} alt="" />
    //             </div>
    //         </div>
    //         <h5>{items.title}</h5>
    //         <p>{items.desc}</p>
    //         </>
    //     );
    // });

    // return (
    //     <>
    //         <Col lg='3'>
    //                 {FormatedServices}
    //         </Col>
    //     </>
    // );
}

export default ServiceList
