import ButtonNextPage from "../../../components/ButtonNextPage/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard/CatalogCard";
import SearchBar from "../../../components/SearchBar/SearchBar";
import type { Product } from "../../../models/Product";
import "./Catalog.css";

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

function Catalog() {
    return (
        <>
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar></SearchBar>
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <CatalogCard product={productList}></CatalogCard>
                        <CatalogCard product={productList}></CatalogCard>
                        <CatalogCard product={productList}></CatalogCard>
                        <CatalogCard product={productList}></CatalogCard>
                        <CatalogCard product={productList}></CatalogCard>
                        <CatalogCard product={productList}></CatalogCard>
                        <CatalogCard product={productList}></CatalogCard>
                        <CatalogCard product={productList}></CatalogCard>
                        <CatalogCard product={productList}></CatalogCard>
                    </div>
                    <ButtonNextPage></ButtonNextPage>
                </section>
            </main>
        </>
    );
}

export default Catalog;
