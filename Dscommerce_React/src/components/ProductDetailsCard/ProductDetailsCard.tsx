import "./ProductDetailsCard.css";
import ProductCategory from "../ProductCategory/ProductCategory";
import type { Product } from "../../models/Product";

type Props = {
    product: Product;
};

function ProductDetailsCard({ product }: Props) {
    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={product.imgUrl} alt="Computador" />
            </div>
            <div className="dsc-product-details-bottom">
                <h3>{product.price}</h3>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className="dsc-category-container">
                    {product.categories.map((category) => (
                        <ProductCategory
                            key={category.id}
                            nome={category.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsCard;
