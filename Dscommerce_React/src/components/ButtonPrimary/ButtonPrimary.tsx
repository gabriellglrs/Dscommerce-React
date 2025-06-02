

import './ButtonPrimary.css';

type Props = {
    nome: string;
}

function ButtonPrimary({nome}: Props) {
  return (
    <div className="dsc-btn dsc-btn-blue">{ nome }</div>
  );
}

export default ButtonPrimary;