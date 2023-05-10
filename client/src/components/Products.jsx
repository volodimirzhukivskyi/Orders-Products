import Order from "./Order/Order";

const Products = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      {products?.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};
export default Products;
