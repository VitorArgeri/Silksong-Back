# Hollow Knight Silksong Experience - Back-End

Bem-vindo ao **Hollow Knight Silksong Experience**, um projeto desenvolvido com paixão e dedicação para os fãs do universo de Hollow Knight. Este repositório contém o Back-End da aplicação, responsável por fornecer uma API robusta e funcional para gerenciar informações sobre personagens e inimigos encontrados no jogo.

## 🎯 Objetivo do Projeto

O objetivo deste projeto é criar uma API que auxilie jogadores durante sua jornada em **Hollow Knight: Silksong**, fornecendo informações detalhadas sobre personagens, inimigos e bosses encontrados no jogo. A aplicação também serve como um espaço para fãs explorarem e contribuírem com informações adicionais.

---

## 🛠️ Funcionalidades da API

A API oferece as seguintes funcionalidades:

- **GET ALL**: Obter todos os personagens e inimigos.
- **GET BY ID**: Obter informações detalhadas de um personagem ou inimigo específico.
- **CREATE**: Adicionar novos personagens e inimigos.
- **UPDATE**: Atualizar informações existentes conforme novas descobertas no jogo.
- **DELETE**: Remover registros, se necessário.

---

## 📋 Requisitos Técnicos

### Informações fornecidas pela API:
- Nome do Personagem/Inimigo.
- Descrição (baseada no jogo).
- Imagem.

### Estrutura do Back-End:
- Desenvolvido com **Node.js** e **Express**.
- Banco de dados gerenciado com **Prisma** e **SQLite** (ou outro banco de dados configurado).
- Arquitetura modular para facilitar manutenção e escalabilidade.

---

## 🚀 Guia de Instalação

Siga os passos abaixo para rodar o Back-End localmente:

### Pré-requisitos:
- **Node.js** (versão 16 ou superior).
- **NPM** ou **Yarn**.
- Banco de dados configurado (SQLite por padrão).

### Passos:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/silksong-back.git
   cd silksong-back
   ```

2. **Instale as dependências**:
```bash
npm install
```

3. **Configure o banco de dados**:

- Verifique o arquivo prisma/schema.prisma para ajustar o banco de dados, se necessário.
- Execute as migrações
  ```bash
  npx prisma migrate dev
  ```

4. **Iniciar o servidor**
  ```bash
  npm run dev
  ```

---

### ☀️ Público-Alvo
Este projeto é voltado para fãs de Hollow Knight, especialmente aqueles que aguardam ansiosamente o lançamento de Silksong. O público-alvo inclui:

Idade: 14 a 35 anos.
Perfil: Jogadores casuais e hardcore que apreciam exploração, narrativa profunda e estilo artístico único.

---

### 📂 Estrutura de Diretórios
```bash
src/
├── controllers/   # Lógica das rotas
├── models/        # Modelos e interação com o banco de dados
├── routes/        # Definição das rotas da API
├── prisma/        # Configuração do banco de dados
└── server.js      # Inicialização do servidor
```
---

### 📄 Licença
Este projeto é de código aberto e está licenciado sob a MIT License.

--- 

### ✉️ Contato
Se você tiver dúvidas, sugestões ou quiser colaborar, entre em contato:

Desenvolvedor: Vitor de Almeida Argeri
Email: vitor.argeri@gmail.com
GitHub: https://github.com/VitorArgeri
