import "./CatalogCard.css";
import type { Product } from "../../models/Product";

type Props = {
    product: Product;
}
function CatalogCard({product}: Props) {
    return (
        <>
            <div className="dsc-card">
                <div className="dsc-catalog-card-top dsc-line-bottom">
                    <img src={product.imgUrl} alt="Computer" />
                </div>
                <div className="dsc-catalog-card-bottom">
                    <h3>{product.price}</h3>
                    <h4>{product.name}</h4>
                </div>
            </div>
        </>
    );
}

export default CatalogCard;
