import React from "react";
import {Carousel} from "react-bootstrap";
import ocean from "../static/img/ocean.jpg"

const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item style={{'height': '600px'}}>
                    <img
                        className="d-block w-100"
                        src={ocean}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Developer blog</h3>
                        <p>Do do nostrud est aliqua</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item style={{'height': '600px'}}>
                    <img
                        className="d-block w-100"
                        src={ocean}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Developer blog</h3>
                        <p>Do do nostrud est aliqua</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item style={{'height': '600px'}}>
                    <img
                        className="d-block w-100"
                        src={ocean}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Developer blog</h3>
                        <p>Do do nostrud est aliqua</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Slider;
