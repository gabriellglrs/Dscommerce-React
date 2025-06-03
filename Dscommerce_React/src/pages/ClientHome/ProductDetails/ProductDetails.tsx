import { Link, useParams } from "react-router-dom";
import ButtonInverse from "../../../components/buttonInverse/buttonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard/ProductDetailsCard";
import * as productService from "../../../services/product-services";
import "./ProductDetails.css";
import ProductDetailsNotFound from "../../../components/ProductDetailsNotFound/ProductDetailsNotFound";

function ProductDetails() {
    const { id } = useParams();
    const productId = id ? Number(id) : 1;
    const product = productService.findById(productId);

    if (!product) {
        return <ProductDetailsNotFound />;
    }

    return (
        <main>
            <section id="product-details-section" className="dsc-container">
                <ProductDetailsCard product={product} />
                <div className="dsc-btn-page-container">
                    <ButtonPrimary nome="Comprar" />
                    <Link to="/">
                        <ButtonInverse nome="Início" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default ProductDetails;
