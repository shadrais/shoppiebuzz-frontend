import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

import  post1 from '../../assets/Post1.jpg';
import  post2 from '../../assets/Post2.jpg';
import  post3 from '../../assets/Post3.jpg';

const Photos = [
    {
        name: 'image1',
        url : post1
    },
    {
        name: 'image2',
        url : post2
    },
    {
        name: 'image3',
        url : post3
    }

]



const Sliders = () => {

    const setting = {
        dots:true,
        fade:true,
        infinite:true,
        speed:500,
        slideToShow:1,
        arrows:true,
        slideToScroll:1,
        className:"slides"
    }


    return (
        <Slider {...setting}>
            {Photos.map((photo) => {
                return (
                    <div className='slide'>
                        <img width="70%" height="30%" src = {photo.url} alt='' />
                    </div>
                )
            } ) }
        </Slider >
    )
}


export default Sliders;