💰 DevBills - Back-End
Este é o back-end da aplicação DevBills, uma ferramenta de controle financeiro pessoal desenvolvida para treinar boas práticas com TypeScript, banco de dados e validação de dados. A aplicação oferece funcionalidades completas para gerenciamento de entradas, saídas, categorias e usuários.

🎯 Objetivo
Criar uma API robusta e segura, estruturada com Fastify, e com banco de dados relacional e não-relacional para melhor organização das informações financeiras e operacionais.

⚙️ Tecnologias Utilizadas
TypeScript – Tipagem estática para melhor manutenção e legibilidade;
Fastify – Framework web leve e rápido;
Prisma – ORM para trabalhar com banco relacional (usuários, transações e categorias);
MongoDB – Armazenamento flexível para dados complementares;
Zod – Validação de dados;
Schema / Controllers / Routes – Estruturação clara e organizada da aplicação;

📌 Funcionalidades
Cadastro e login de usuários
Criação, edição e remoção de:
Transações financeiras (entrada e saída)
Categorias personalizadas
Validação de dados com Zod
Separação clara entre:
Schemas (validação)
Controllers (lógica de negócio)
Routes (organização de rotas da API)

Conexão com dois bancos:
PostgreSQL (via Prisma): dados estruturados
MongoDB: dados de histórico ou extras

🧠 Aprendizados
Utilização de TypeScript para tipagem forte e previsível
Prática com dois bancos de dados diferentes no mesmo projeto
Estruturação limpa com Fastify e separação de responsabilidades
Criação de rotas seguras e performáticas
Validação de dados segura com Zod

🚀 Como Rodar o Projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/Matheus-Figueiredo-Dev/DevBills-API.git
Instale as dependências:

bash
Copiar
Editar
yarn
Configure o ambiente:
Crie um arquivo .env com as informações de conexão para o PostgreSQL e MongoDB.

env
Copiar
Editar
DATABASE_URL="postgresql://usuario:senha@localhost:5432/devbills"
MONGO_URL="mongodb://localhost:27017/devbills"
Execute as migrações do Prisma:

bash
Copiar
Editar
npx prisma db push
Inicie a aplicação:

bash
Copiar
Editar
yarn dev

![image](https://github.com/user-attachments/assets/513a0a13-50d6-4060-b7ab-b255e533b4d5)

![image](https://github.com/user-attachments/assets/020644e2-7bb4-486b-88dd-dfb831e4d517)

📍 Status
✅ Projeto concluído e em constante melhoria. Pronto para integração com um front-end futuro.
