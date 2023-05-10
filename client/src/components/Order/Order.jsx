import Products from "../Products";

const Order = ({ order }) => {
  const { id, title, date, description, products } = order;
  const ownProducts = products?.length ? (
    <Products products={products} />
  ) : (
    "Не має товарів!"
  );
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{description}</li>
      <li>{date}</li>
      <li>{ownProducts}</li>
    </ul>
  );
};

export default Order;
