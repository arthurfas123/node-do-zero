# Node-do-zero

Descrição curta do que o projeto faz.

## Tecnologias

- Node.js
- Fastify
- PostgreSQL

## Como rodar

1. Instale as dependências:
```bash
   npm install
```

2. Configure as variáveis de ambiente no arquivo `.env`:
```
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASS=sua_senha
   DB_NAME=seu_banco
```

3. Crie as tabelas:
```bash
   node create-tables.js
```

4. Inicie o servidor:
```bash
   node server.js
```

## Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /videos | Lista todos os vídeos |
| POST | /videos | Cria um novo vídeo |
| PUT | /videos/:id | Atualiza um vídeo |
| DELETE | /videos/:id | Remove um vídeo |