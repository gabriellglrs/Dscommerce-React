import "./ButtonInverse.css";

interface ButtonInverseProps {
    nome: string;
    onClick?: () => void;
}

export default function ButtonInverse({ nome, onClick }: ButtonInverseProps) {
    return (
        <button className="dsc-btn-inverse" onClick={onClick}>
            {nome}
        </button>
    );
}