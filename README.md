# Players and Dragons

A [Trybe](https://www.betrybe.com/) é uma escola de tecnologia com foco em formação de Desenvolvedores Web e o projeto Players and Dragons foi proposto como atividade de aprimoramento dos estudos sobre desenvolvimento back-end com foco em Programação Orientada a Objetos (POO), SOLID e TypeScript. 

## Objetivo

Players and Dragons é um projeto para praticar os príncipios SOLID com a Programação Orientada a Objetos (POO) onde é simulado um jogo de interpretação de papéis como um RPG  (Role Playing Game). 

## Tecnologias e Ferramentas
<div>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker"/>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
</div>

<br>

Na elaboração deste projeto utilizou-se as seguintes ferramentas:

- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)

## ⚙️ Execução

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

    git clone git@github.com:cleciopinheiro/trybers-and-dragons.git
    
Navegue até a raíz do projeto.

    cd trybers-and-dragons/

<details>
   <summary><strong>Rodando a aplicação com o Docker</strong></summary> 
  </br>
  
  <strong>Obs:</strong> Para rodar a aplicação dessa forma você deve ter o [Docker](https://www.docker.com/) instalado na sua máquina.
  
  </br>
  
  Na raíz do projeto, suba os containers <strong>trybers_and_dragons</strong> utilizando o docker-compose.

      docker-compose up -d
    
  Abra o terminal do container <strong>trybers_and_dragons</strong>.

      docker exec -it trybers_and_dragons bash

  Uma vez no terminal do container, execute o comando abaixo para instalar as dependências do projeto.
    
      npm install
    
  Inicie a aplicação com ts-node usando o comando abaixo.
  
      npm start
    
  Para iniciar a aplicação com o nodemon, use o script abaixo.
   
      npm run dev
    
</details>

---
 
Desenvolvido por [Clécio Pinheiro](https://www.linkedin.com/in/cleciopinheirodev), © 2023.
