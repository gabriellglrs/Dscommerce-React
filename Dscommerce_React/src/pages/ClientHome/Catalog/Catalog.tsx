import "../Catalog/Catalog.css";
import ButtonNextPage from "../../../components/ButtonNextPage/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard/CatalogCard";
import SearchBar from "../../../components/SearchBar/SearchBar";

import { useEffect, useState } from "react";
import type { Product } from "../../../models/Product";
import * as productService from "../../../services/product-services";
import ProductsNotFound from "../../../components/ProductsNotFound/ProductsNotFound";

function Catalog() {
    const [products, setProducts] = useState<Product[]>([]); 

    useEffect(() => {

        productService.findAll()
            .then((response: { data: { content: Product[] } }) => {
                setProducts(response.data.content);
            })
            .catch(() => {
                setProducts([]);
            });
    }, []);

    if (products.length === 0) {
        return (
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar></SearchBar>
                    <ProductsNotFound />
                </section>
            </main>
        );
    }
    return (
        <>
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar></SearchBar>
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        {products.map((product) => (
                            <CatalogCard
                                key={product.id}
                                product={product}
                            ></CatalogCard>
                        ))}
                    </div>
                    <ButtonNextPage></ButtonNextPage>
                </section>
            </main>
        </>
    );
}

export default Catalog;
