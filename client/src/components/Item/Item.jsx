import React, {useEffect, useState} from "react";
import {Alert, Button} from "react-bootstrap";
import ModalComponent from "../Modal/Modal";
import {addCssClass, stopPropagation} from "../../helpers/otherFunction";
import {convertUAHTo} from "../../helpers/convertFunction";
import Table from "../Table/Table";
import styles from "./Item.module.scss";
import Products from "../../pages/Products";
import {useDispatch, useSelector} from "react-redux";
import {getShowModal} from "../../redux/selectors/modal.select";
import {handleClose, handleShow} from "../../redux/reducers/modal.reducer";
import {changeShowProducts, deleteOrder} from "../../redux/reducers/order.reducer";
import {getShowProducts} from "../../redux/selectors/order.select";

const Item = ({order, scheme, additionalScheme}) => {

const dispatch =useDispatch();
    const [amountInUsd, setAmountInUsd] = useState('');
    const additionalValue =useSelector(getShowProducts)
    const showId =useSelector(getShowModal)
    const columns = React.useMemo(
        () => scheme.concat(additionalScheme),
        []
    )
    useEffect(() => {
        convertUAHTo(order.amount_in_hryvnia, 'USD').then(r => {
            setAmountInUsd(r)
        })
    }, [])


    const ButtonValue = !additionalValue ? "Show more" :additionalValue===order.id?"Hide more":  "Show more";
    const ownProducts = order.products?.length ? (
        <Products products={order.products}/>
    ) : (
        <h2>Не має товарів!</h2>
    );
    const productsValue = additionalValue===order.id?ownProducts:""
    return (

        <Alert className={styles.item__wrapper} key={'light'} variant={'light'}>
            <Table actions={<><Button className={addCssClass(styles.delete, styles.button)} variant="danger"
                                       onClick={stopPropagation(()=>handleShow(order.id),dispatch)}>Delete</Button>
                <Button className={addCssClass(styles.showMore, styles.button)} variant="success"
                        onClick={stopPropagation(()=>changeShowProducts(order.id),dispatch)}>{ButtonValue}</Button>
            </>} amountInUsd={amountInUsd} columns={columns} data={[order]}/>
            {productsValue}
            <ModalComponent show={showId===order.id} handleClose={stopPropagation(handleClose,dispatch)}
                            title={"Are you sure you want to remove this order?"}
                            actions={<><Button variant="secondary" onClick={stopPropagation(handleClose,dispatch)}>
                                Close
                            </Button>
                                <Button variant="primary" onClick={stopPropagation(()=>deleteOrder(showId),dispatch)}>
                                    Delete
                                </Button></>}/>
        </Alert>

    );
};

export default Item;
