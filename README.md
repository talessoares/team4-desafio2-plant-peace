# team4-desafio2-plant-peace

### Tecnologias Utilizadas

- **TypeScript (TSX):** ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
- **React:** ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
- **MongoDB:** ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
- **Docker:** ![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
- **Nginx:** ![Nginx](https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white)


## Para acessar a documentação do projeto acesse a [Wiki](https://github.com/talessoares/team4-desafio2-plant-peace/wiki)

## Como Executar: 
Este projeto é dividido em duas partes principais: frontend e backend. Abaixo estão as instruções para executar ambas.

### 1. Backend (Node.js com TypeScript)

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/talessoares/team4-desafio2-plant-peace.git
   ```
2. **Acesse o diretório raiz**
```bash
   cd team4-desafio2-plant-peace
 ```
3. **Acesse a pasta do back/front**
   
4. **Para o backend acesse**
 ```bash
   cd team4-desafio2-plant-peace-api
 ```
5. **Para o frontend acesse**
```bash
   cd team4-desafio2-plant-peace-api-web
 ```
6. **Instale as dependências**
```bash
   npm install
 ```
   
##### é importante que instale as dependências dentro dos diretórios corretos de cada projeto

### Execução
- No backend use:
```bash
npx tsx src/server.ts
 ```

- No frontend use:
```bash
   npm run dev
```
## Alternativa de Execução
Para facilitar a execução dos dois projetos + Docker, foi adicionado um arquivo Makefile. Para executar o arquivo make garanta que o tenha instalado em sua máquina. 
Saiba mais em https://www.gnu.org/software/make/.

Execute:
```bash
   make run
```
## Uso do Docker
O docker fui utilizado com a intenção de simulador um servidor real. Para isso setamos um container com [nginx](https://nginx.org/en/) (servidor http), desse modo é possível acessar as imagens via chamada get na url da imagem. Ele foi usado para simular serviços como amazon S3 e outros concorrentes do mercado. 

O docker depende do arquivo de configuração nginx.conf(presente no diretório raiz), devido ao erro de cors.



## Projeto Finizado:

Acesse á pagina da wiki para ver as imagens do projeto finalizado:

## Login com Clerk

O login default do clerk é:
- user: teste@mail.com
- password: teste
## Mongodb:
Tanto o backend quanto o frontend possuem arquivos .env.local que carregam a URl do [Mongo Atlas](https://cloud.mongodb.com), é necessário adicionar os arquivos e adicionar uma URI valida para acessar o banco de dados.
- Para usar nosso banco de dados é preciso pedir acesso pois o mongo limita o acesso do banco por IP
