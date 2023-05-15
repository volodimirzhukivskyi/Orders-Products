import Product from "../components/Product/Product";
import {SCHEME_PRODUCT_IN_PRODUCTS} from "../helpers/constans";
import {useState} from "react";
import {Container, Form} from "react-bootstrap"
import {getProducts} from "../redux/selectors/product.select";
import {useSelector} from "react-redux";
import styleOwnList from "./OwnPage.module.scss";

const Products = () => {
    const products  = useSelector(getProducts)
    const [productState, setProductstate] = useState([])
    const [selectedValue, setSelectedValue] = useState('')

    const handleSelectChange = (event) => {
        const curValue = event.target.value
        setSelectedValue(curValue);
        setProductstate(products.filter(item =>  item.productType === curValue


        ))
    };
    return (
        <Container>
            <h2 className={styleOwnList.title}>Products</h2>
            <Form.Select value={selectedValue} onChange={handleSelectChange} aria-label="Default select example">
                <option value=''>Type product</option>
                <option value="household products">Household products</option>
                <option value="electrical appliances">Electrical appliances</option>
            </Form.Select>
            {productState?.map((product) => (
                <Product key={product.id} product={product} schema={SCHEME_PRODUCT_IN_PRODUCTS}/>
            ))}
        </Container>
    );
};
export default Products;
