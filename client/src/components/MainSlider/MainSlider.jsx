import React, { Component } from 'react';
import Slider from "react-slick";
import clothes from '../../assets/img/clothes.jpg';
import open from '../../assets/img/open.jpg';
import sale from '../../assets/img/sale.jpg';
import './style.css';

class MainSlider extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div>
                <Slider {...settings}>
                    {/*<div className="sliderImg" style="background-image: url(../../assets/img/clothes.jpg)"></div>*/}
                    {/*<div className="sliderImg" style={{backgroundImage: "url(' + open + ')"}}></div>*/}
                    {/*<div className="sliderImg" style={{backgroundImage: "url(' + sale + ')"}}></div>*/}
                    <div>
                        <img src={clothes} alt="img" className="sliderImg"/>
                    </div>
                    <div>
                        <img src={open} alt="img" className="sliderImg"/>
                    </div>
                    <div>
                        <img src={sale} alt="img" className="sliderImg"/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default MainSlider;