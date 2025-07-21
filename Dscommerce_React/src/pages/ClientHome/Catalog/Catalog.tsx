/* eslint-disable react-hooks/exhaustive-deps */
import "../Catalog/Catalog.css";
import ButtonNextPage from "../../../components/ButtonNextPage/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard/CatalogCard";
import SearchBar from "../../../components/SearchBar/SearchBar";

import { useEffect, useState } from "react";
import type { Product } from "../../../models/Product";
import * as productService from "../../../services/product-services";
import ProductsNotFound from "../../../components/ProductsNotFound/ProductsNotFound";

interface QueryParams {
    page: number;
    name: string;
}

export function Catalog() {
    const [isLastPage, setIsLastPage] = useState<boolean>(false);

    const [products, setProducts] = useState<Product[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: "",
    });

    useEffect(() => {
        productService
            .findAll(queryParams.page, queryParams.name)
            .then(
                (response: { data: { content: Product[]; last: boolean } }) => {
                    const nextPage = response.data.content;
                    setProducts(products.concat(nextPage));
                    setIsLastPage(response.data.last);
                }
            )
            .catch(() => {
                setProducts([]);
            });
    }, [queryParams]);

    function handleSearch(searchText: string) {
        setProducts([]); // Limpa os produtos
        setQueryParams({ page: 0, name: searchText }); // Atualiza os parâmetros de busca
    }

    function handlenextPageClick(): void {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }

    if (products.length === 0) {
        return (
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar onSearch={handleSearch}></SearchBar>
                    <ProductsNotFound />
                </section>
            </main>
        );
    }

    return (
        <>
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar onSearch={handleSearch}></SearchBar>
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        {products.map((product) => (
                            <CatalogCard
                                key={product.id}
                                product={product}
                            ></CatalogCard>
                        ))}
                    </div>

                    {!isLastPage && (
                        <div onClick={handlenextPageClick}>
                            <ButtonNextPage></ButtonNextPage>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
