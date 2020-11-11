import React from 'react';
import { Carousel } from 'react-bootstrap'

export default function ImageCarousel(props) {
    const { listOfImages } = props
    return (
        <div>
            <Carousel>
                {
                    listOfImages.map(image => {
                        return(
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image.href}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );

}

