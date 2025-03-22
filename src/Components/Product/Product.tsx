import Product_Img from "../../assets/Product/product.png";
import "./product.css";

const Product = () => {
  return (
    <div className="product_cont">
      <div className="img_cont">
        <img src={Product_Img} alt="Product Image" />
      </div>
    </div>
  );
};

export default Product;
