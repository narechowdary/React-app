import React from 'react';
import { Carousel } from 'react-bootstrap'

export default function ImageCarousel(props) {
    // Object destructuring from props
    const { listOfImages } = props
    return (
        <div>
            <Carousel>
                {/* Map the list of images from the props */}
                {
                    listOfImages.map(image => {
                        return(
                            <Carousel.Item>
                                <img
                                    src={image.href}
                                    alt="First slide"
                                    width="1000" 
                                    height="500"
                                />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );

}

