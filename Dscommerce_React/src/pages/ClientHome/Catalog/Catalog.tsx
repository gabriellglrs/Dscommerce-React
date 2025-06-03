import "../Catalog/Catalog.css";
import ButtonNextPage from "../../../components/ButtonNextPage/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard/CatalogCard";
import SearchBar from "../../../components/SearchBar/SearchBar";
import * as productService from "../../../services/product-services";

function Catalog() {
    return (
        <>
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar></SearchBar>
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        {productService.findAll().map((product) => (
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
