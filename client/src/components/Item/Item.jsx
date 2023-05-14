import React, {useEffect, useState} from "react";
import {Alert, Button} from "react-bootstrap";
import ModalComponent from "../Modal/Modal";
import {addCssClass, stopPropagation} from "../../helpers/otherFunction";
import {convertUAHTo} from "../../helpers/convertFunction";
import Table from "../Table/Table";
import styles from "./Item.module.scss";
import Products from "../../pages/Products";

const Item = ({order, scheme, additionalScheme}) => {
    console.log(order)
    const [show, setShow] = useState(false);
    const [additionalValue, setAdditionalValue] = useState(false)
    const [amountInUsd, setAmountInUsd] = useState('')
    const columns = React.useMemo(
        () => scheme.concat(additionalScheme),
        [additionalValue]
    )
    useEffect(() => {
        convertUAHTo(order.amount_in_hryvnia, 'USD').then(r => {
            setAmountInUsd(r)
        })
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdditional = () => setAdditionalValue(prev => !prev);
    const ButtonValue = !additionalValue.length ? "Show more" : "Hide more";
    const ownProducts = order.products?.length ? (
        <Products products={order.products}/>
    ) : (
        <h2>Не має товарів!</h2>
    );
    const productsValue = additionalValue?ownProducts:""
    return (

        <Alert className={styles.item__wrapper} key={'light'} variant={'light'}>
            <Table actions={<><Button className={addCssClass(styles.delete, styles.button)} variant="danger"
                                       onClick={stopPropagation(handleShow)}>Delete</Button>
                <Button className={addCssClass(styles.showMore, styles.button)} variant="primary"
                        onClick={stopPropagation(handleAdditional)}>{ButtonValue}</Button>
            </>} amountInUsd={amountInUsd} columns={columns} data={[order]}/>
            {productsValue}
            <ModalComponent show={show} handleClose={stopPropagation(handleClose)}
                            title={"Are you sure you want to remove this product?"}
                            actions={<><Button variant="secondary" onClick={stopPropagation(handleClose)}>
                                Close
                            </Button>
                                <Button variant="primary" onClick={stopPropagation(handleClose)}>
                                    Delete
                                </Button></>}/>
        </Alert>

    );
};

export default Item;
