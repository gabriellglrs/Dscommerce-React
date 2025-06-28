import './CartNotFound.css';

export function CartNotFound() {
  return (
    <div className="cart-not-found">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Carrinho vazio"
        className="cart-not-found-img"
      />
      <h2>Seu carrinho está vazio</h2>
      <p>Adicione produtos para visualizar aqui.</p>
    </div>
  );
}