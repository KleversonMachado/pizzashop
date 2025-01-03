# 🍕 pizza.shop

Pizza Shop é um aplicativo de entrega de comida (similar ao iFood/Uber Eats), porém nessa versão contém apenas a visão administrativa. Construído com TypeScript, Drizzle e ElysiaJS.

## Tecnologias Utilizadas

- **Backend**:

  - TypeScript
  - ElysiaJS
  - Drizzle ORM
  - PostgreSQL
  - Docker

- **Frontend**:
  - React
  - Vite
  - TailwindCSS
  - React Query
  - React Hook Form
  - Zod
  - Playwright (para testes E2E)
  - Testing Library (para testes unitários)

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

- **pizzashop-api**: Contém o backend da aplicação.
- **pizzashop-web**: Contém o frontend da aplicação.

## Como Executar

### Pré-requisitos

- Docker
- Node.js
- Bun
- Yarn

### Passos para Executar

1. Clone o repositório:

   ```sh
   git clone https://github.com/kleversonmachado/pizzashop.git
   cd pizzashop

   ```

2. Configure o banco de dados com Docker:
   `docker-compose up -d`

3. Instale as dependências e execute as migrações:

````cd pizzashop-api
bun i
bun migrate
bun seed
bun dev```

4. Inicie o frontend:
```cd ../pizzashop-web
yarn
yarn dev```

5. Acesse a aplicação em http://localhost:5173

## Funcionalidades
- Registro de novos restaurantes
- Login de gerentes de restaurantes
- Gerenciamento dos pedidos do restaurante
- Atualização do perfil público do restaurante
- Abrir/fechar o restaurante
- Listagem de métricas do restaurante

## Bibliotecas Utilizadas
### Backend
- @elysiajs/cookie
- @elysiajs/cors
- @elysiajs/jwt
- @paralleldrive/cuid2
- @react-email/components
- dayjs
- drizzle-orm
- postgres
- zod

### Frontend
- @hookform/resolvers
- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @radix-ui/react-label
- @radix-ui/react-popover
- @tanstack/react-query
- axios
- clsx
- date-fns
- react
- react-day-picker
- react-dom
- react-helmet-async
- react-router-dom
- recharts
- shadcn-ui
- sonner
- tailwind-merge
- tailwindcss
- typescript
- vite
- vitest

## Testes
### Backend
Para rodar os testes E2E no backend, utilize:
```bun test```

### Frontend
Para rodar os testes unitários do frontend, utilize:
```yarn test```

Para rodar os testes E2E no frontend, utilize:
```yarn playwright test --ui```
````
