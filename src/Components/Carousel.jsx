import React from 'react'
import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Image} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
const Carouselll = () => {

    const [slider, setSlider] = useState([])

    const getCarousel = () => {
        axios.get(`https://outlook-india-news.herokuapp.com/carousel_news`).then((res) => {
            setSlider(res.data)
        })
    }

    useEffect(() => {
        getCarousel()
    }, [])


    return (
        <>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
                showArrows={true}
                

            >
                {
                    slider.map((slide) => {
                        return (
                            <>
                                <Link to='/'>
                                    <Image style={{ width: "70%", height: "450px", margin: "10px" }} src={slide.url} />
                                </Link>

                            </>
                        )
                    })
                }
            </Carousel>

        </>
    )
}

export default Carouselll











//     state.isLoading ?

//       <Box width={`60%`} margin='5px'>
//         <Skeleton height={400} />

//         <Skeleton height={60} /><Skeleton height={40} />
//         <Skeleton height={100} fontSize='40px' />
//         <Skeleton fontSize='20px' />
//         <Skeleton fontSize='30px' />
//       </Box>
//       : <>