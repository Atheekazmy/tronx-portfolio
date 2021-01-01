
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import Swiper from 'react-id-swiper';
import HomeContent from './Home/HomeContent';

export const VerticalSlider = forwardRef((props, ref) => {
    const swiperRef = useRef();

    const params = {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 1000,
        mouseWheelControl: true,
        parallax: true,
        parallaxEl: {
            el: '.parallax-bg',
            value: '-23%'
        },

    }
    const changeSlider = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    }

    useImperativeHandle(ref, () => ({
        changeSlider: changeSlider
    }));


    return (
        <div >

            <Swiper {...params} ref={swiperRef} >
                <div >
                    <HomeContent />
                </div>
                <div styles={{ marginLeft: '30%' }}>
                    <HomeContent />
                </div>
                <div >
                    <div data-swiper-parallax="-300">
                        Slide #2
                    </div>
                    <div data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                            amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                            euismod.
                        </p>
                    </div>
                </div>
                <div >
                    <div data-swiper-parallax="-300">
                        Slide #2
                    </div>
                    <div data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                            amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                            euismod.
                        </p>
                    </div>
                </div>
                <div styles={{ marginLeft: '30%' }}>
                    <div data-swiper-parallax="-300">
                        Slide #2
                    </div>
                    <div data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                            amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                            euismod.
                        </p>
                    </div>
                </div>
                <div styles={{ marginLeft: '30%' }}>
                    <div data-swiper-parallax="-300">
                        Slide #2
                    </div>
                    <div data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                            amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                            Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                            euismod.
                        </p>
                    </div>
                </div>
            </Swiper >
        </div >
    )
});

