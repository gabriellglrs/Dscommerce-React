# DSCommerce React

Um projeto de e-commerce moderno desenvolvido com React, TypeScript e CSS personalizado. A aplicação oferece uma experiência completa de compras online com catálogo de produtos, detalhes de produtos, carrinho de compras e sistema de busca.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **React Router DOM** - Roteamento e navegação
- **Axios** - Cliente HTTP para requisições à API
- **CSS3** - Estilização customizada com variáveis CSS
- **Vite** - Build tool e servidor de desenvolvimento

## 📋 Funcionalidades

### ✅ Implementadas
- 🏪 **Catálogo de Produtos** - Listagem em grid responsivo
- 🔍 **Barra de Pesquisa** - Interface para busca de produtos
- 📱 **Design Responsivo** - Adaptável a diferentes dispositivos
- 🛒 **Carrinho de Compras** - Gerenciamento de itens
- 📄 **Detalhes do Produto** - Visualização completa com categorias
- 🎨 **Sistema de Design** - Componentes reutilizáveis
- 🧭 **Navegação** - Roteamento com React Router
- ⚠️ **Tratamento de Erros** - Páginas de erro personalizadas
- 🔄 **Carregamento Dinâmico** - Botão "Carregar mais"

### 🔄 Em Desenvolvimento
- 🔐 Sistema de autenticação
- 💳 Finalização de pedidos
- 📊 Painel administrativo

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Backend da aplicação rodando na porta 8080

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/dscommerce-react.git
cd dscommerce-react
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure a URL da API**
Verifique se o backend está rodando em `http://localhost:8080` ou altere a URL em:
```typescript
// src/utils/System.ts
export const BASE_URL: string = 'http://localhost:8080';
```

4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**
Abra seu navegador em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── ButtonNextPage/   # Botão carregar mais
│   ├── ButtonPrimary/    # Botão principal
│   ├── CatalogCard/      # Card do produto no catálogo
│   ├── ProductCategory/  # Tag de categoria
│   ├── SearchBar/        # Barra de pesquisa
│   └── ...
├── pages/               # Páginas da aplicação
│   └── ClientHome/      # Layout principal do cliente
│       ├── Catalog/     # Página do catálogo
│       ├── Cart/        # Página do carrinho
│       └── ProductDetails/ # Detalhes do produto
├── models/              # Interfaces TypeScript
│   ├── Product.ts       # Modelo do produto
│   └── Category.ts      # Modelo da categoria
├── services/            # Serviços de API
│   └── product-services.ts # Serviços de produtos
├── routes/              # Configuração de rotas
│   └── AppRoutes.tsx    # Definição das rotas
└── utils/               # Utilitários
    └── System.ts        # Configurações do sistema
```

## 🎨 Sistema de Design

### Paleta de Cores
```css
--dsc-color-bg-primary: #e8e8e8      /* Fundo principal */
--dsc-color-bg-secondary: #ffe500     /* Amarelo (header) */
--dsc-color-bg-tertiary: #636363      /* Cinza escuro */
--dsc-color-bg-quaternary: #0caf1d    /* Verde */

--dsc-color-btn-primary: #3483fa      /* Azul (botões) */
--dsc-color-font-primary: #636363     /* Texto principal */
--dsc-color-font-secondary: #0caf1d   /* Preços */
```

### Componentes Principais
- **CatalogCard** - Card de produto no catálogo
- **ProductDetailsCard** - Detalhes completos do produto
- **SearchBar** - Barra de pesquisa com ícones
- **ButtonPrimary/ButtonInverse** - Botões estilizados
- **ProductCategory** - Tags de categoria

## 🔌 API Endpoints

O projeto consome uma API REST com os seguintes endpoints:

- `GET /products` - Lista todos os produtos
- `GET /products/{id}` - Busca produto por ID

### Exemplo de Response
```json
{
  "content": [
    {
      "id": 1,
      "name": "The Lord of the Rings",
      "description": "Lorem ipsum...",
      "price": 90.5,
      "imgUrl": "https://example.com/img.jpg",
      "categories": [
        {
          "id": 1,
          "name": "Livros"
        }
      ]
    }
  ]
}
```

## 📱 Responsividade

A aplicação foi desenvolvida com abordagem **mobile-first** e inclui breakpoints para:

- **Mobile**: < 576px
- **Tablet**: 576px - 768px  
- **Desktop**: > 768px

## 🧪 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção
npm run lint         # Executa o linter
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autor

Desenvolvido por [Seu Nome](https://github.com/seu-usuario)

## 📞 Contato

- Email: seu.email@exemplo.com
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)
- GitHub: [@seu-usuario](https://github.com/seu-usuario)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
