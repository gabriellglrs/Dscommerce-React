import { Link } from "react-router-dom";
import "./ProductDetailsNotFound.css";

interface Error {
    error: string;
    status: number;
}

export default function ProductDetailsNotFound({ error, status }: Error) {
    return (
        <div className="ProductDetailsNotFound">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="Produto não encontrado"
                className="notfound-img"
            />
            <h2>{error}</h2>
            <p>O produto que você procura não existe ou foi removido.</p>
            <p>Status: {status}</p>
            <Link className="notfound-btn" to="/catalog">Voltar ao catálogo</Link>
        </div>
    );
}
