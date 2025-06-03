import "./CatalogCard.css";
import type { Product } from "../../models/Product";
import { Link } from "react-router-dom";

type Props = {
    product: Product;
};
function CatalogCard({ product }: Props) {
    return (
        <>
            <Link to={`/product-details/${product.id}`}>
                <div className="dsc-card">
                    <div className="dsc-catalog-card-top dsc-line-bottom">
                        <img src={product.imgUrl} alt="Computer" />
                    </div>
                    <div className="dsc-catalog-card-bottom">
                        <h3>{product.price}</h3>
                        <h4>{product.name}</h4>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default CatalogCard;
