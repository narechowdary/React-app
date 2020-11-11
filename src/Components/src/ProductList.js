import React from 'react';

export default function ProductDetails(props) {
    const { productId, productPrice, heroImageUrl, height, width, productName, imageClick } = props;

    // constructing given styles object from json
    const productDetailsStyles = {
        height,
        width,
        backgroundImage: `url(${heroImageUrl})`,
        backgroundRepeat: 'no-repeat'
    }

    // Considering selling price & low price is an offer
    const highPrice = productPrice.selling.high ? productPrice.selling.high : productPrice.regular;
    const lowprice = productPrice.selling.low ? productPrice.selling.low : productPrice.selling;

    return (
        <div className='col-md-4'>
            {/* Assuming all images are same height */}
            <div className='container' style={{...productDetailsStyles}} onClick ={()=>imageClick(productId)}>
                <div className='product-details'>
                    <div className='product-title'>
                        {productName}
                    </div>
                    <div className='product-price'>
                        {/* Display both prices when they are different (OR) Display low price when they are same */}
                        { highPrice !== lowprice ? 
                            <div>
                                <span className = 'hight-price'>$ {highPrice}</span><br />
                                <span className = 'low-price'>$ {lowprice}</span> 
                            </div>
                        :
                            <div>
                                <span className = 'low-price'>$ {lowprice}</span> 
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}