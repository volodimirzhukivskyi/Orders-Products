import Table from "../Table/Table";
import React, {useEffect, useState} from "react";
import {convertUAHTo} from "../../helpers/convertFunction";

const Product = ({ product,schema }) => {
  const [amountInUsd, setAmountInUsd] = useState('')
  const columns = React.useMemo(
      () => schema,
      []
  )
  useEffect(() => {
    convertUAHTo(product.amount_in_hryvnia, 'USD').then(r => {
      setAmountInUsd(r)
    })
  }, [])
  return (<Table style={{padding: 0}} amountInUsd={amountInUsd} columns={columns} data={[product]}/>

  );
};

export default Product;
