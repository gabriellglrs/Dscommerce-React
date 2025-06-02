import './buttonInverse.css';
type Props = {
    nome: string;
}
function buttonInverse({nome}: Props) {
  return(
    <div className="dsc-btn dsc-btn-white">{nome}</div>
  );
}

export default buttonInverse;