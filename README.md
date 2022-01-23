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
- /category (Aceita método post) Criação de categoria nova
- /category/:id (Aceita método get, put e delete) | Consulta, edição e exclusão de categoria
- /category/search/:name (Aceita método get) Consulta de categoria pelo nome


#### Produtos /products e /product

- /products (Aceita método get) Consulta todos os produtos
- /products/:category (Aceita método get e delete) Consulta e deleta produtos por categoria
- /product (Aceita método post) Criação de produto novo
- /product/:id (Aceita método get, put e delete) Consulta, edição e exclusão de produto
- /product/search/:name (Aceita método get) Consulta de produto pelo nome

#### Comentários /product/comment

- /product/comment (Aceita método post) Criação de comentário novo
- /product/comment/:id (Aceita método get) Consulta de comentários pelo id do produto
- /product/comment/:id (Aceita método delete) Exclusão de comentário pelo id do produto e do usúario e mensagem especifica

## Demonstração

![Login](https://i.imgur.com/E4WMM0g.png)
![Home](https://i.imgur.com/urcz2ZV.png)
![Perfil](https://i.imgur.com/Y6rvm8j.png)
![Produto](https://i.imgur.com/lo3wIHj.png)
![Gerenciamento](https://i.imgur.com/6yjSioD.png)



## Aprendizados

Criar rotas e gerenciar foi meu maior desafio e o que mais aprendi por ser a primeira vez criando o back-end de uma aplicação

## Stack utilizada

**Front-end:** React, React Router, Redux, Css

**Back-end:** Node, Typscript, Express


## Instalação

Por possuir Front-End e Back-End, a instalação é feita individualmente em suas respectivas pastas


Acessar a pasta de front e usar o comando abaixo e após, acessar a de back e usar o mesmo comando.
```bash
  cd front
  npm install
  cd ../back
  npm install
  cd ..
```
    
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/BicaBenedicto/ecommerce.git
```

Entre no diretório do projeto

```bash
  cd ecommerce
```

**Instale as dependências conforme informado acima**

**Configurando servidor:**

Alguns arquivos necessitam configurações no back-end e front-end.

Back-end

Ao entrar na pasta de 'config', temos 2 arquivos, 'default.json' e 'production.json', ambos precisam da chave postgree do banco de dados que irá utilizar para a aplicação funcionar.

```bash
  cd back/config
```

A pasta 'sql' possui o 'init.sql' que é para criação dos bancos de dados necessários para a aplicação funcionar.

```bash
  cd back/sql
```

A posta padrão do servidor está configurada para 4000, podendo ser alterado no arquivo 'index.ts' na pasta de 'src'.

```bash
  cd back/src
```

Front-end

Por ser feito requisições via API, é necessário trocar o ip que será utilizado para fazer a requisição, está como padrão 'http://localhost:3000/'
E pode ser alterado no arquivo 'Fetchs.js' na pasta 'services' dentro de 'src'

```bash
  cd front/src/services
```


**Inicie o servidor**

Para inicializar o front-end

```bash
  cd front
  npm run start
```

Para inicialziar o back-end

```bash
  cd back
  npm run dev
```

## FAQ

#### O projeto está finalizado?

Não, o projeto está em andamento, ele foi iniciado ao fazer o Bootcamp de Inter Front-End Developer pela DIO, gostei do potencial do projeto e decide aprimorar e criar um sistema automatizado completo

#### Posso ajudar a aprimorar o projeto?

Sim, toda ajuda para um sistema automatico e seguro é bem-vinda.


## Funcionalidades pendentes

- Alteração do back-end/banco de dados para utilizar o e-mail para chave única.
- Adição de sistema de verificação de e-mail existente ao cadastrar.
- Adição da funcionalidade de likes/deslikes em produtos
- Filtros em barra de Pesquisa
- Página de finalizar compra
- Implementação de API dos correios para calculo de valor do frete dos produtos
