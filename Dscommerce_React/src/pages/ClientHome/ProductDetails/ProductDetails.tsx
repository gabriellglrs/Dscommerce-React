import { Link, useNavigate, useParams } from "react-router-dom";
import { ButtonInverse } from "../../../components/buttonInverse/buttonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard/ProductDetailsCard";
import "./ProductDetails.css";
import ProductDetailsNotFound from "../../../components/ProductDetailsNotFound/ProductDetailsNotFound";
import { useEffect, useState } from "react";
import type { Product } from "../../../models/Product";
import * as productService from "../../../services/product-services";
import { addProductToCart } from "../../../services/cart-services";

function ProductDetails() {
    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState<Product>();
    const [erro, setError] = useState({ error: "", status: 0 });

    useEffect(() => {
        if (!params.id) {
            setProduct(undefined);
        }
        productService.findById(Number(params.id))
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                setProduct(undefined);
                // setError(error.response.data.error);
                setError((prevError) => ({
                    ...prevError,
                    error: error.response.data.error,
                    status: error.response.data.status,
                }));
                alert(
                    `${error.response.data.error} - Erro: ${error.response.data.status}`
                );
            });
    }, [params.id]);

    if (product === undefined) {
        return (
            <ProductDetailsNotFound error={erro.error} status={erro.status} />
        );
    }

    function handleBuyClick() {
        if (product) {
            addProductToCart(product)
            navigate("/cart");
        }
    }

    return (
        <main>
            <section id="product-details-section" className="dsc-container">
                <ProductDetailsCard product={product} />
                <div className="dsc-btn-page-container">
                    <div onClick={handleBuyClick} >
                        <ButtonPrimary nome="Comprar" />
                    </div>
                    <Link to="/">
                        <ButtonInverse nome="Início" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default ProductDetails;
