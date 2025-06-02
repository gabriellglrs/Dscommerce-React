import './ProductCategory.css';

type Props = {
    nome: string;
}

function ProductCategory({ nome }: Props) {
	return (
		<div className="dsc-category">{ nome }</div>
	);
}

export default ProductCategory;