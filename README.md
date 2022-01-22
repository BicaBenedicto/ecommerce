# Projeto E-commerce
Projeto desenvolvido como conclusão do Bootcamp de Front-End Developer do banco Inter, com um front-end que realiza a comunicação ao back-end e é gerenciado por um banco de dados.

## Front-End

### Páginas e funções

- Página de login/cadastro
- Páginas inicial com categorias e produtos populares
- Páginas de todas categorias e detalhes de produtos
- Pesquisa de produto pelo nome
- Página de perfil
- Página de gerenciamento de produtos e categorias
- Comentar sobre o produto na página de detalhes
- Página de carrinho para gerenciamento de quantidade e valores

### Integrado com banco de dados por API

- Login e cadastro
- Produtos e categorias exibidos
- Gerenciamento de produtos e categorias
- Edições do usuario em página de perfil
- Comentários dos produtos

## Back-End

### Banco de dados criados e registros

- Banco de dados para usúarios registrando (Nome, id, e-mail, idade, genero, localidade e senha criptograda)
- Banco de dados para categorias registrando (Chave, nome da categoria e imagem)
- Banco de dados para produtos registrando (Id, nome, valor, imagem e categoria)
- Banco de dados para comentários registrando (comentário, nome do usúario, id do usúario e id do produto)

### Rotas criadas e funções

#### Usúario /user

- /user (Aceito método post) | Criação de nova conta
- /user/:id (Aceito método get, post e delete) | Consulta, edição e exclusão de conta
- /user/search/:email (Aceito método get) | Consulta de e-mail existente no banco de dados
- /user/search/:email/:password (Aceito método get) | Consulta de conta registrada no sistema

#### Categorias /category e /categories

- /categories (Aceita método get e delete) | Consulta todos as categorias e excluir todas as categorias
- /category 
## Demonstração

Insira um gif ou um link de alguma demonstração


## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?


## Stack utilizada

**Front-end:** React, Redux, TailwindCSS

**Back-end:** Node, Express


## Instalação

Instale my-project com npm

```bash
  npm install my-project
  cd my-project
```
    
## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run deploy
```


## FAQ

#### Questão 1

Resposta 1

#### Questão 2

Resposta 2


## Melhorias

Que melhorias você fez no seu código? Ex: refatorações, melhorias de performance, acessibilidade, etc

