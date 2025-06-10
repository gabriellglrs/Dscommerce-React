import './ProductsNotFound.css';

export default function ProductsNotFound() {
  return (
    <div className="products-not-found">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Nenhum produto encontrado"
      />
      <h2>Nenhum produto encontrado</h2>
      <p>Não encontramos produtos para sua busca.</p>
    </div>
  );
}
