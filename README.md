# 🛒 DSCommerce - Frontend React

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

Uma aplicação de e-commerce moderna e responsiva desenvolvida com React e TypeScript, oferecendo uma experiência completa de compras online.

## 📸 Preview

![image](https://github.com/user-attachments/assets/0a09e933-4e31-46f0-b043-6a0e522d28ca)
![image](https://github.com/user-attachments/assets/d4ae16f9-2eba-4d1d-a97f-ca355ba4b14c)
![image](https://github.com/user-attachments/assets/18c48b75-7028-4757-a28d-d51e7a0721d8)


## 🌟 Características

### 🎯 Funcionalidades Principais
- **Catálogo de Produtos**: Navegação intuitiva com grid responsivo
- **Busca Inteligente**: Sistema de busca em tempo real
- **Detalhes do Produto**: Visualização completa com categorias
- **Carrinho de Compras**: Gerenciamento completo de itens
- **Persistência Local**: Carrinho mantido entre sessões
- **Design Responsivo**: Otimizado para todos os dispositivos

### 🎨 Interface e Experiência
- Design limpo e moderno
- Cores consistentes com sistema de variáveis CSS
- Navegação fluida com React Router
- Feedback visual para todas as ações
- Estados de loading e erro bem definidos

### 🔧 Recursos Técnicos
- **TypeScript**: Tipagem estática para maior segurança
- **React Hooks**: useState, useEffect, useNavigate, useParams
- **React Router**: Navegação SPA completa
- **LocalStorage**: Persistência de dados do carrinho
- **Axios**: Requisições HTTP otimizadas
- **CSS Variables**: Sistema de design consistente

## 🗂️ Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── ButtonNextPage/   # Botão carregar mais
│   ├── ButtonPrimary/    # Botão principal
│   ├── CatalogCard/      # Card do produto no catálogo
│   ├── ProductDetailsCard/ # Card de detalhes do produto
│   ├── SearchBar/        # Barra de pesquisa
│   ├── CartNotFound/     # Estado vazio do carrinho
│   └── headerClient/     # Cabeçalho da aplicação
├── pages/               # Páginas da aplicação
│   └── ClientHome/      # Layout principal
│       ├── Catalog/     # Página do catálogo
│       ├── Cart/        # Página do carrinho
│       └── ProductDetails/ # Página de detalhes
├── models/              # Interfaces TypeScript
│   ├── Product.ts       # Modelo do produto
│   ├── Category.ts      # Modelo da categoria
│   └── order.ts         # Modelos de pedido
├── services/            # Serviços da aplicação
│   ├── product-services.ts # Serviços de produtos
│   └── cart-services.ts    # Serviços do carrinho
├── localstorage/        # Persistência local
│   └── cart-repository.ts  # Repositório do carrinho
├── routes/              # Configuração de rotas
│   └── AppRoutes.tsx    # Definição das rotas
└── utils/               # Utilitários
    └── System.ts        # Constantes do sistema
```

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **TypeScript** - Superset do JavaScript
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **CSS3** - Estilização

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Vite** - Hot reload e build otimizado

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Backend API rodando (DSCommerce API)

## ⚙️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/dscommerce-react.git
cd dscommerce-react
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure a API
Certifique-se de que a API backend está rodando em `http://localhost:8080`

Para configurar a API backend, acesse: [DSCommerce API](https://github.com/gabriellglrs/DsCommerce)

### 4. Configure as variáveis de ambiente
O arquivo `src/utils/System.ts` contém as configurações:
```typescript
export const BASE_URL: string = 'http://localhost:8080';
export const CART_KEY: string = 'cart';
```

### 5. Execute a aplicação
```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🎮 Como Usar

### Navegação Principal
1. **Página Inicial/Catálogo**: Visualize todos os produtos disponíveis
2. **Busca**: Use a barra de pesquisa para encontrar produtos específicos
3. **Detalhes**: Clique em qualquer produto para ver detalhes completos
4. **Carrinho**: Adicione produtos e gerencie suas compras

### Funcionalidades do Carrinho
- **Adicionar**: Clique em "Comprar" na página de detalhes
- **Aumentar/Diminuir**: Use os botões + e - no carrinho
- **Remover**: Diminua a quantidade até zero
- **Limpar**: Use o botão "Limpar Carrinho"
- **Continuar**: Volte às compras com "Continuar comprando"

### Busca de Produtos
- Digite na barra de pesquisa para filtrar produtos em tempo real
- Use o botão 🔎 para confirmar a busca
- Use o botão 🗙 para limpar a busca

## 🎨 Personalização de Cores

O sistema usa variáveis CSS para fácil personalização:

```css
:root {
    --dsc-color-bg-primary: #e8e8e8;     /* Fundo principal */
    --dsc-color-bg-secondary: #ffe500;    /* Fundo do header */
    --dsc-color-btn-primary: #3483fa;     /* Botões principais */
    --dsc-color-font-primary: #636363;    /* Texto principal */
    --dsc-color-font-secondary: #0caf1d;  /* Preços */
    /* ... outras variáveis */
}
```

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints:
- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
npm run lint         # Executa o linting
```

## 🤝 API Integration

Este frontend consome a API DSCommerce que deve estar rodando em paralelo.

### Endpoints Utilizados:
- `GET /products` - Lista produtos com paginação e filtros
- `GET /products/{id}` - Busca produto por ID

### Configuração da API:
Certifique-se de que a API backend está configurada e rodando. Mais informações em: [DSCommerce API Repository](https://github.com/gabriellglrs/DsCommerce)

## 📊 Funcionalidades Implementadas

### ✅ Completas
- [x] Listagem de produtos
- [x] Busca de produtos
- [x] Detalhes do produto
- [x] Carrinho de compras
- [x] Persistência do carrinho
- [x] Design responsivo
- [x] Tratamento de erros
- [x] Estados de loading

### 🔄 Em Desenvolvimento
- [ ] Autenticação de usuários
- [ ] Finalização de pedidos
- [ ] Histórico de compras
- [ ] Avaliações de produtos
- [ ] Wishlist

## 🐛 Tratamento de Erros

A aplicação possui tratamento robusto de erros:
- **Produtos não encontrados**: Componente dedicado com mensagem amigável
- **Carrinho vazio**: Estado visual específico
- **Erros de API**: Alertas informativos para o usuário
- **Rotas inválidas**: Redirecionamento automático

## 🎯 Performance

### Otimizações Implementadas:
- **Lazy Loading**: Carregamento sob demanda
- **Memoização**: Componentes otimizados
- **Bundle Splitting**: Divisão inteligente do código
- **CSS Optimization**: Variáveis CSS para consistência

## 🔐 Segurança

- **TypeScript**: Tipagem estática previne erros
- **Sanitização**: Dados tratados antes da exibição
- **Validação**: Verificação de dados de entrada

## 🚀 Deploy

### Para produção:
```bash
npm run build
```

O build será gerado na pasta `dist/` pronto para deploy em qualquer servidor web.

### Plataformas recomendadas:
- **Vercel** (recomendado para projetos React)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Commit:
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` refatoração
- `test:` testes

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Gabriel Lopes**
- GitHub: [@gabriellglrs](https://github.com/gabriellglrs)
- LinkedIn: [Gabriel Lucas](https://linkedin.com/in/gabriellglrs)

## 🙏 Agradecimentos

- Comunidade React pelo excelente framework
- Contribuidores do projeto
- Todos que testaram e deram feedback

---

<div align="center">
  <p>Feito com ❤️ por Gabriel Lucas</p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>
