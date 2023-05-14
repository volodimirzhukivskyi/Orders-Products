import Product from "../components/Product/Product";
import {SCHEME_PRODUCT_IN_PRODUCTS} from "../helpers/constans";
import {useState} from "react";
import {Form} from "react-bootstrap"

const Products = ({products = []}) => {
    const [productState, setProductstate] = useState(products)
    const [selectedValue, setSelectedValue] = useState('')

    const handleSelectChange = (event) => {
        const curValue = event.target.value
        setSelectedValue(curValue);
        setProductstate(products.filter(item => {
            if (!curValue) {
                return true
            } else {
                return item.productType === curValue
            }

        }))
    };
    return (
        <div>
            <h2>Products</h2>
            <Form.Select value={selectedValue} onChange={handleSelectChange} aria-label="Default select example">
                <option value=''>Type product</option>
                <option value="household products">Household products</option>
                <option value="electrical appliances">Electrical appliances</option>
            </Form.Select>
            {productState?.map((product) => (
                <Product key={product.id} product={product} schema={SCHEME_PRODUCT_IN_PRODUCTS}/>
            ))}
        </div>
    );
};
export default Products;
