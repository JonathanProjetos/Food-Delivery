# Bem-vindo ao Food Delivery
A API Food Delivery .

 
</details>

## Sumário
- [Bem-vindo ao Food Delivery](#Bem-vindo-ao-Food-Delivery)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Deploy](#Deploy)
- [Swagger](#Swagger)
- [Git, GitHub e Histórico de Commits](#git-github-e-histórico-de-commits)
- [Lint](#lint)

## Contexto
O __Food Delivery__ é uma ferramenta que acessa a bases de dados, é permite aos usuários:
- Fazer login;
- Cadastrar um novo usuário;
- Buscar por produtos;
- Criar novos produtos;
- Criar ordem de pedido;
- Atualizar uma ordem de pedido;
- Atualizar um produto;
- Deletar um pedido;

__Quando logado é possivel__
- Buscar por produtos;
- Criar novos produtos;
- Criar ordem de pedido;
- Atualizar uma ordem de pedido;
- Atualizar um produto;
- Deletar um pedido;
- Deletar um produto;

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [NodeJS](https://nodejs.org/en/) | Plataforma de execução runtime baseda em javascript. 
- [MongoDB](https://www.mongodb.com/docs/) | Banco de dados NoSQL não-relacional.
- [Moongose](https://mongoosejs.com/docs/) | ODM Object-documente-Mapper para MongoDB
- [Express](https://expressjs.com/pt-br/) | Framework web para nodejs

O Node.js foi utilizado com o intuito de obter os benefícios da escalabilidade e eficiência, pois ele é capaz de lidar com vários tráfegos sem bloqueio e lida com solicitações com baixo consumo de recursos. O MongoDB foi introduzido pensando em desempenho e flexibilidade. Este conjunto proporciona uma maior facilidade de adaptação e evolução do aplicativo, sem contar também que o MongoDB trabalha com documentos no formato JSON, que é um formato nativo em algumas linguagens. O Mongoose foi implementado por ser uma biblioteca poderosa e flexível que simplifica a interação com o MongoDB e adiciona recursos úteis, como validação de dados, tratamento de relacionamentos e ganchos personalizados. O Express é um framework para o Node.js que permite construir aplicações web robustas e escaláveis de forma mais fácil e rápida.

## Instalação e Execução
### Download do projeto
```
git clone git@github.com:JonathanProjetos/Food-Delivery.git
```

### Arquivo evn
- Dentro da pasta Food-Delivery existe o arquivo .env.example nele será nescessário remover o .example e oferecer a url do MongoDB,é uma senha para o Json-Web-Token.


### Instalar dependências
```
cd Food-Delivery
docker compose up -d

obs: O proprio comando docker vai instalar as dependências e startar a aplicação.
```
### Adicionar os Produtos
- Após subir os conteiners docker, abra o terminal e rode os comandos abaixo.
```
docker exec -it food_delivery bash
npm run products:import

obs: Caso queira remover os produtos rode:
npm run products:destroy
```
### Deploy
- Foi realizado o deploy da aplicação no railway neste [Link](https://food-delivery-production-fba9.up.railway.app/)

### Swagger
- Foi implementado a documentação por parte através do swagger nela possibilita de testar a aplicação de forma mais rápida e intuitiva.
- O link para a documentação é [DOC](https://food-delivery-production-fba9.up.railway.app/docs)
- Alguns end-points séra necessessário oferecer o token para o Authorization no swagger. O token será disponibilizado quando foi feito o login é como resposta terá o token.

### Git, GitHub e Histórico de Commits
Este projeto utilizou a [Especificação de Commits Convencionais](https://www.conventionalcommits.org/en/v1.0.0/), com alguns tipos da [convenção Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). Além disso, foi utilizado o pacote [conventional-commit-cli](https://www.npmjs.com/package/conventional-commit-cli) para ajudar a seguir a convenção de commits. É importante utilizar a convenção de commits em projetos para manter o histórico de commits organizado e facilitar a leitura e o entendimento do que foi desenvolvido.


### Lint
- O projeto foi desenvolvido seguindo os padrões de Clean Code especificados pelo [Lint da Trybe](https://github.com/betrybe/eslint-config-trybe).

