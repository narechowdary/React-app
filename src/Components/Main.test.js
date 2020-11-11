import TestRenderer from 'react-test-renderer';
import ProductList from './ProductList'

it("props should received correctly", () => {
    const price = {
        selling: '120',
        regular: '150'
    }
    function Main() {
        return (
            <div>
                <ProductList productId={"sampleId"} height={"100"} width={"200"} heroImageUrl={"https://google.com"} productPrice= {price} productName={"Sample Product"} />
            </div>
        )
    }

    const testRenderer = TestRenderer.create(<Main />);
    const testInstance = testRenderer.root;
    
    expect(testInstance.findByType(ProductList).props.productId).toBe("sampleId");
    expect(testInstance.findByType(ProductList).props.height).toBe("100");
    expect(testInstance.findByType(ProductList).props.width).toBe("200");
    expect(testInstance.findByType(ProductList).props.heroImageUrl).toBe("https://google.com");
    expect(testInstance.findByType(ProductList).props.productPrice.selling).toBe("120");
})