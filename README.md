# DevBills API

Uma API RESTful para controle de transações financeiras, construída com **Fastify**, **Prisma** e **MongoDB**. Desenvolvido como parte de um desafio para praticar back-end com TypeScript.

## 📦 Tecnologias

- [Fastify](https://www.fastify.io/)
- [Prisma ORM](https://www.prisma.io/)
- [Zod](https://zod.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)

## 🚀 Funcionalidades

- ✅ Criar transações
- ✅ Listar transações por usuário
- ✅ Validar entrada de dados com Zod
- ✅ Exibir saldo (balance) calculado
- ✅ Arredondar valores de saída
- ✅ Deletar transações
- ✅ Middleware de autenticação simplificado

## 📂 Estrutura do Projeto

```
src/
├── controllers/
├── routes/
├── schemas/
├── config/
│   └── prisma.ts
├── index.ts
prisma/
│   └── schema.prisma
```

## ▶️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/MatheusFigueiredo1001/DevBills-api.git
cd DevBills-api
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure o banco de dados

Crie um arquivo `.env`:

```env
DATABASE_URL="file:./dev.db" # ou PostgreSQL, MySQL conforme desejado
```

### 4. Execute a migração e rode o projeto

```bash
npx prisma db push
yarn dev
```

### 5. Acesse

Servidor rodando em: `http://localhost:3001`

## 📄 Licença

Este projeto está sob a licença MIT.
