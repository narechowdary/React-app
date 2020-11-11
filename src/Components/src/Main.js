import React from 'react'
import { sampleJson } from '../SampleJson/Sample'
import ProductDetails from './ProductList'
import ImageCarousel from './ImageCarousel'
import { Modal } from 'react-bootstrap'

export default class Main extends React.Component {
    productImagesMap = {};
    constructor() {
        super()
        this.state = {
            showCarousal: false,
            productId: undefined
        }

        // Make a Product Images List from Json
        for (let i = 0; i < sampleJson.groups.length; i++) {
            this.productImagesMap[sampleJson.groups[i].id] = [...sampleJson.groups[i].images, sampleJson.groups[i].thumbnail];
        };
    }

    // On Image Click Carousel Modal Open method
    imageClick = (productId) => {
        if (this.state.productId) {
            this.setState({ showCarousal: false })
        } else {
            this.setState({ productId, showCarousal: true })
        }
    }

    // Hide Carousel Modal method ouside click
    hideCarousal = () => {
        this.setState({ productId: undefined, showCarousal: false })
    }

    render() {
        const { showCarousal, productId } = this.state
        return (
            <div>
                {/* Header of the Page */}
                <div className="App">
                    <img class="logo-image"  src="https://assets.wsimgs.com/wsimgs/rk/images/i/202045/0007/images/common/logo.svg" alt="Williams Sonoma"></img>
                </div> <br />
                {/* Passing Product Price if avaialble if not Prce Range */}
                <div className='row'>
                    {sampleJson.groups.map(product => {
                        return (
                            <ProductDetails key={product.id} productId={product.id} height={product.hero.height} width={product.hero.width} heroImageUrl={product.hero.href} productPrice={product.price || product.priceRange} productName={product.name} imageClick={this.imageClick} />
                        )
                    })}
                </div>
                {/* Open Carousal Modal when user click on image */}
                <div>
                    <Modal
                        show={showCarousal}
                        onHide={this.hideCarousal}
                        size="lg"
                        centered
                    >
                        <div >
                            {productId && <ImageCarousel listOfImages={this.productImagesMap[this.state.productId]} />}
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}