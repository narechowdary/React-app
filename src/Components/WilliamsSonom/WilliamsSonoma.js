import React from 'react'
import { sampleJson } from '../SampleJson/Sample'
import ProductDetails from './ProductDetails'
import ImageCarousel from './ImageCarousel'

export default class WilliamsSonoma extends React.Component {
    productImagesMap = {};
    constructor() {
        super()
        this.state = {
            productId : undefined
        }
    
        for (let i = 0; i < sampleJson.groups.length; i++) {
            this.productImagesMap[sampleJson.groups[i].id] = [...sampleJson.groups[i].images, sampleJson.groups[i].thumbnail];
        };
    }

    imageClick = (productId) => {
        this.setState({ productId })
    }

    render() {
        const { productId } = this.state
        return (
            <div>
                <div className="App">
                    <h1>Williams Sonoma Products</h1>
                </div>
                {/* Passing Product Price if avaialble if not Prce Range */}
                <div className='row'>
                    {sampleJson.groups.map(product => {
                        return (
                            <ProductDetails key={product.id} productId={product.id} height={product.hero.height} width={product.hero.width} heroImageUrl={product.hero.href} productPrice={product.price || product.priceRange} productName={product.name} imageClick={this.imageClick} />
                        )
                    })}
                </div>
                <div>
                    { productId && <ImageCarousel listOfImages={this.productImagesMap[this.state.productId]}/>}
                </div>
            </div>
        )
    }
}