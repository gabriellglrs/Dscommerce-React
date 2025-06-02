import ButtonInverse from "../../../components/buttonInverse/buttonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard/ProductDetailsCard";
import type { Product } from "../../../models/Product";

import "./ProductDetails.css";

export const productList: Product = {
    id: 1,
    name: "The Lord of the Rings",
    description: "Livro de fantasia épica escrito por J.R.R. Tolkien.",
    price: 90.5,
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg",
    categories: [
        {
            id: 1,
            name: "Livros",
        },
        {
            id: 2,
            name: "Caderno",
        },
        {
            id: 3,
            name: "Importados",
        },
    ],
};

function ProductDetails() {
    return (
        <>
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductDetailsCard product={productList} />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary nome="Comprar" />
                        <ButtonInverse nome="Início" />
                    </div>
                </section>
            </main>
        </>
    );
}

export default ProductDetails;
