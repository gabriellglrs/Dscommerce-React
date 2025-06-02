import type { Category } from "./Category";

export interface Product {
  id: number;           // ID do produto
  name: string;         // Nome do produto
  description: string;  // Descrição do produto
  price: number;        // Preço do produto
  imgUrl: string;       // URL da imagem do produto
  categories: Category[]; // Lista de categorias (pode ter mais de uma)
}
