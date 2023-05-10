const Product = ({ product }) => {
  const { id, specification, type, title, photo, isNew, serialNumber } =
    product;
  return (
    <ul>
      <li>{id}</li>
      <li>{specification}</li>
      <li>{type}</li>
      <li>{title}</li>
      <li>{photo}</li>
      <li>{isNew}</li>
      <li>{serialNumber}</li>
    </ul>
  );
};

export default Product;
