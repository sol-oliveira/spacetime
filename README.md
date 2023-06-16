<img width="800" alt="image" height="400" src="NLW Spacetime.gif"/>

## 📋 Sobre 
<p>
 Aplicação web que permite aos usuários registrem momentos marcantes, como fotos e mensagens, em diferentes fases da vida.</p>

<p><i>Desenvolvido em Rocketseat - NLW Spacetime - 12° edição.</i></p>

### 🛠 Tecnologias Front

- [Next.js](https://nextjs.org/) - Framework React

- [NextAuth.js](https://next-auth.js.org/) - Provedor de autenticação

- [TypeScript](https://www.typescriptlang.org/) - Extensão do JavaScript (suporte a módulos, interface, classe e tipagem)

- [Tailwindcss](https://tailwindcss.com/docs/installation) - Framework css


### 🛠 Tecnologias Back

- [Node.js](https://nodejs.org/en/) - Ambiente de execução back-end JavaScript

- [TypeScript](https://www.typescriptlang.org/) - Extensão do JavaScript (suporte a módulos, interface, classe e tipagem)

- [Prisma](https://www.prisma.io/) - ORM (Object-Relational Mapping) de banco de dados

- [Fastify](https://www.fastify.io/) - Servidor Web
 
- [Zod](https://github.com/colinhacks/zod)- Biblioteca para validação de dados do TypeScript.

### 🖥️ Rodando o Frond End 

```bash
# Clonar repositório
$ git clone https://github.com/sol-oliveira/spacetime.git

# Acesse a pasta do projeto no terminal/cmd
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```


### 🎲 Rodando o Back End (servidor)

```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```

### 🌈⃤  Rodando o Prisma

```bash

# setup prisma com flag SQLite - schema prisma file / .env
$ npx prisma init --datasource-provider SQLite
# migration - mecanismo de versionamento de banco de dados (arquivos de instruções)
$ npx prisma migrate dev
# reset(caso necessário) - excluir registros do banco de dados
$ npx prisma migrate reset
# visualisar banco de dados - Prisma Studio
$ npx prisma studio
# Gerar ERD - Diagrama de Banco de Dados
$ npx prisma generate
# Gerar seed (exemplo) para Banco de Dados. Observar configurações do prisma no package.json
$ npx prisma db seed
```


<p align="center" dir="auto">Feito com <g-emoji class="g-emoji" alias="hearts" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2665.png">♥</g-emoji>
  por Sol Oliveira :tulip:</p>
