# Prova Postman

Este repositório contém os testes automatizados realizados utilizando o **Postman**, com geração de relatórios em HTML usando o **newman-reporter-htmlextra**.

## Tecnologia utilizadas

- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/downloads/)
- Newman e o reporter `htmlextra`

## Como executar o projeto

1. **Clone o repositório:**
   
   ```bash
   git clone https://github.com/Wetto27/S206-L1.git
   cd Prova/Postman
   ```

2. **Instale o newman e o reporter**

   Newman:

   ```bash
   npm i newman
   ```

   html-extra reporter:

   ```bash
   npm i newman-reporter-htmlextra
   ```

3. **Gere o relatório:**
   ```bash
   newman run ProvaPostman.postman_collection.json -r htmlextra
   ```

## Como visualizar o relatório

Após a execução dos testes, o relatório será gerado automaticamente na pasta newman.

Para visualizar o relatório, basta abrir o arquivo .html no seu navegador.