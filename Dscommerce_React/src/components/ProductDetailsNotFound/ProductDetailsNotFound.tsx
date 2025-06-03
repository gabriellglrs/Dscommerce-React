import { Link } from "react-router-dom";
import "./ProductDetailsNotFound.css";

export default function ProductDetailsNotFound() {
    return (
        <div className="ProductDetailsNotFound">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="Produto não encontrado"
                className="notfound-img"
            />
            <h2>Produto não encontrado</h2>
            <p>O produto que você procura não existe ou foi removido.</p>
            <Link className="notfound-btn" to="/catalog">Voltar ao catálogo</Link>
        </div>
    );
}
