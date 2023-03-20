# Bem-vindo ao Food Delivery
A API Food Delivery .

 
</details>

## Sumário
- [Bem-vindo ao App de delivery](#Bem-vindo-ao-Food-Delivery)
- [Preview](#preview)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
 - [Git, GitHub e Histórico de Commits](#git-github-e-histórico-de-commits)
 - [Lint](#lint)

## Contexto
O __Food Delivery__ é uma ferramenta que acessa a bases de dados, é permite aos usuários:
- Fazer login;
- Cadastrar um novo usuário
- Buscar por produtos;
- Criar novos produtos
- Criar ordem de pedido;
- Atualizar uma ordem de pedido;
- Atualizar um produto
- Deletar um pedido;

__Quando logado é possivel__
- Buscar por produtos;
- Criar novos produtos
- Criar ordem de pedido;
- Atualizar uma ordem de pedido;
- Atualizar um produto;
- Deletar um pedido;
- Deletar um produto;

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [NodeJS](https://nodejs.org/en/) | Plataforma de execução runtime baseda em javascript. 
- [MongoDB](https://www.mongodb.com/docs/) | Banco de dados NoSQL não-relacional.
- [Moongose](https://mongoosejs.com/docs/) | ORM Object-Relational Mapping para nodejs
- [Express](https://expressjs.com/pt-br/) | Framework web para nodejs

O Node.js foi utilizado com o intuito de obter os benefícios da escalabilidade e eficiência, pois ele é capaz de lidar com vários tráfegos sem bloqueio e lida com solicitações com baixo consumo de recursos. O MongoDB foi introduzido pensando em desempenho e flexibilidade. Este conjunto proporciona uma maior facilidade de adaptação e evolução do aplicativo, sem contar também que o MongoDB trabalha com documentos no formato JSON, que é um formato nativo em algumas linguagens. O Mongoose foi implementado por ser uma biblioteca poderosa e flexível que simplifica a interação com o MongoDB e adiciona recursos úteis, como validação de dados, tratamento de relacionamentos e ganchos personalizados. O Express é um framework para o Node.js que permite construir aplicações web robustas e escaláveis de forma mais fácil e rápida.

## Instalação e Execução
### Download do projeto
```
git clone git@github.com:JonathanProjetos/App-De-Delivery.git
```
### Instalar dependências
```
cd App-De-Delivery
npm install
npm start

obs: o proprio script start executará tanto o back-end quanto o front-end.
```


### Arquivo evn
- Dentro da pasta back-end existe o arquivo .env.example nele será nescessário remover o .example e oferecer a senha do seu mysql.


### Acesso cadastrado
- customer 
```
login: zebirita@email.com
senha: $#zebirita#$
```
- seller
```
login: fulana@deliveryapp.com
senha: fulana@123
```
- admin
```
login: adm@deliveryapp.com
senha: --adm2@21!!--
```

### Git, GitHub e Histórico de Commits
Este projeto utilizou a [Especificação de Commits Convencionais](https://www.conventionalcommits.org/en/v1.0.0/), com alguns tipos da [convenção Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). Além disso, foi utilizado o pacote [conventional-commit-cli](https://www.npmjs.com/package/conventional-commit-cli) para ajudar a seguir a convenção de commits. É importante utilizar a convenção de commits em projetos para manter o histórico de commits organizado e facilitar a leitura e o entendimento do que foi desenvolvido.


### Metodologias Ágeis
Durante o desenvolvimento deste projeto, foram utilizadas metodologias ágeis, que são práticas que valorizam a interação e colaboração entre os membros de uma equipe de desenvolvimento, visando uma entrega mais rápida e eficiente do projeto. A utilização dessas práticas é especialmente importante em projetos em grupo, pois ajuda a manter a equipe alinhada e a evitar atrasos e retrabalhos desnecessários. Para saber mais sobre as metodologias ágeis, confira o [Manifesto Ágil](https://agilemanifesto.org/).

### Lint
- O projeto foi desenvolvido seguindo os padrões de Clean Code especificados pelo [Lint da Trybe](https://github.com/betrybe/eslint-config-trybe).

