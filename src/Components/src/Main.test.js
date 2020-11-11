import TestRenderer from 'react-test-renderer';

it("should props received correctly", () => {
    function Main() {
        return (
            <div>
                <ProductList productId={"sampleId"} height={"100"} width={"200"} heroImageUrl={"https://google.com"} productPrice={"24"} productName={"Sample Product"} />
            </div>
        )
    }
    
    function ProductList() {
        return (
            <div>
                <span>sampleId</span>
                <span>100</span>
                <span>200</span>
                <span>https://google.com</span>
                <span>24</span>
            </div>
        );
    }

    const testRenderer = TestRenderer.create(<Main />);
    const testInstance = testRenderer.root;
    
    expect(testInstance.findByType(ProductList).props.productId).toBe("sampleId");
    expect(testInstance.findByType(ProductList).props.height).toBe("100");
    expect(testInstance.findByType(ProductList).props.width).toBe("200");
    expect(testInstance.findByType(ProductList).props.heroImageUrl).toBe("https://google.com");
    expect(testInstance.findByType(ProductList).props.productPrice).toBe("24");
})