import './buttonInverse.css';

type Props = {
    nome: string;
}

export function ButtonInverse({nome}: Props) {
  return(
    <div className="dsc-btn dsc-btn-white">{nome}</div>
  );
}