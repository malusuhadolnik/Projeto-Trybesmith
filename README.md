# Projeto Trybesmith

# Sobre
Este projeto foi desenvolvido durante o Módulo 3 - Back-End do curso de Desenvolvimento Web da Trybe.

Nele, foi construída uma API utilizando a arquitetura MSC (model-service-controller) e a linguagem Typescript. Esta API consiste em um sistema de gerenciamento de vendas para uma loja de itens medievais, que permite criar e visualizar e produtos, pedidos e usuários. Algumas das rotas possuem validações de dados, incluindo criação e validação de Token. O banco de dados utilizado foi o MySQL, tendo sido explorado o relacionamento entre as tabelas orders e products.

Os arquivos desenvolvidos por mim estão na pasta src. Os demais foram desenvolvidos pelo time da Trybe.

## Descrição dos endpoints:
<table>
  <thead>
    <tr>
      <th>Método HTTP</th>
      <th>Endpoint</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>POST</td>
      <td>/products</td>
      <td>Deve cadastrar um novo produto, retornando um objeto com os dados inseridos e uma id única</td>
    </tr>
    <td>GET</td>
      <td>/products</td>
      <td>Deve listar todos os produtos</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/users</td>
      <td>Deve cadastrar um novo cliente, retornando um token</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/orders</td>
      <td>Deve listar todos os pedidos</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/login</td>
      <td>Realiza login de um cliente, retornando um token</td>
    </tr>
  </tbody>
</table>

## Tecnologias usadas

> Back-End
Docker, docker-compose, SQL, Node.js, JWT

## Instalando Dependências

### Usando o Docker

1. Clone este repositório em su máquina, e em seguida suba o container:
```bash
docker-compose up -d
``` 
- Serão inicializados os containers trybesmith e trybesmith_db

2. Dentro do diretório do projeto, execute o conteiner:
```bash
docker exec -it trybesmith bash
``` 
- As credencias de acesso ao banco de dados estão definidas no arquivo docker-compose.yml.

3. Agora instale as dependências dentro do container:
```bash
npm install
``` 
### Rodando localmente

 - É necessário ter o ```node``` (versão 16 ou superior) instalado em sua máquina.
 
 1. Clone este repositório em su máquina, e em seguida instale as dependências:
 ```bash
npm install
```
### Para inicializar o servidor
- Faça isso dentro do conatiner, se estiver o utilizando.
```bash
npm run dev
``` 
