import { Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import Swiper from 'react-id-swiper';

export const VerticalSlider = ({ classes }) => {
    const menuName = ['Home', 'Services', 'Resume', 'Projects', 'Blogs', 'Contact'];
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
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        //     renderBullet: (index, className) => {
        //         // return '<a className=>' + (menuName[index]) + '</a>';
        //         return '<a class="' + className + '">' + (menuName[index]) + '</a>';
        //     }

    }
    const changeSlider = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    }

    return (
        <div >
            <div className={`container borderXwidth`}>
                {menuName.map((x, i) => <a classes={classes.anchorBackground} onClick={() => changeSlider(i)}><Typography color='secondary'>{x}</Typography></a>)}
            </div>
            {/* <div className="container borderXwidth">
                {menuName.map((x, i) => <a onClick={() => changeSlider(i)}><Typography color='secondary'>{x}</Typography></a>)}
            </div> */}
            <Swiper {...params} className={classes.swiper} ref={swiperRef} >
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
};
