# Bem-vindo(a) ao Meu Teste Front-End

Seja Bem-vindo(a) ao meu teste front-end! Este projeto foi desenvolvido para demonstrar habilidades em desenvolvimento web utilizando tecnologias modernas como Next.js, TypeScript, e Tailwind CSS. O objetivo é criar um formulário de endereço que se integra com a API ViaCEP para preenchimento automático dos campos e permite salvar os dados em um arquivo JSON.

## O que o Tester Pode Esperar

Ao explorar este projeto, o tester pode esperar:

- **Funcionalidade de Formulário**: Um formulário intuitivo que permite ao usuário inserir um CEP e ver os campos de endereço sendo preenchidos automaticamente.
- **Validação de Campos**: Cada campo do formulário é validado para garantir que os dados inseridos sejam corretos e consistentes.
- **Integração com API**: A integração com a API ViaCEP permite o preenchimento automático dos campos de endereço, proporcionando uma experiência de usuário eficiente.
- **Salvamento de Dados**: A capacidade de salvar os dados do formulário em um arquivo JSON local, demonstrando a manipulação de dados no lado do cliente.
- **Testes Automatizados**: Implementação de testes end-to-end utilizando Cypress para garantir a robustez e a funcionalidade do formulário.
- **Estilização Moderna**: Uso do Tailwind CSS para criar uma interface de usuário limpa e responsiva.

## Funcionalidades

- **Campos do Formulário**:
  - **CEP**: campo para o usuário inserir o CEP.
  - **Logradouro**: campo de rua (preenchido automaticamente ao inserir o CEP).
  - **Complemento**: campo opcional para o complemento do endereço.
  - **Bairro**: campo de bairro (preenchido automaticamente ao inserir o CEP).
  - **Cidade**: campo de cidade (preenchido automaticamente ao inserir o CEP).
  - **Estado**: campo de estado (preenchido automaticamente ao inserir o CEP).

- **Validação dos Campos**:
  - Validação de cada campo (tipagem e controle de caracteres), garantindo que os dados inseridos sejam válidos.

- **Botões**:
  - **Limpar**: limpa todos os campos do formulário.
  - **Salvar**: salva os dados preenchidos no formulário em um arquivo **JSON** local.

- **Integração com a API ViaCEP**:
  - Ao inserir o CEP e sair do campo, os dados do endereço (logradouro, cidade, bairro, estado) são preenchidos automaticamente, consumindo a API do [ViaCEP](https://viacep.com.br/).

- **Cypress**:
  - Implementação de testes automatizados utilizando Cypress para validar a funcionalidade do formulário, como preenchimento correto dos campos e salvamento dos dados no arquivo JSON.

## Tecnologias Utilizadas

- **Next.js**: Framework para React, utilizado para construir a aplicação de forma otimizada e com renderização no servidor.
- **TypeScript**: Superset do JavaScript, utilizado para garantir tipagem estática e maior segurança no desenvolvimento.
- **React Hook Form**: Biblioteca para gerenciamento de formulários no React com validação e controle de estados de forma eficiente.
- **Axios**: Biblioteca para realizar requisições HTTP, utilizada para consultar a API do ViaCEP.
- **Cypress**: Ferramenta para testes end-to-end, utilizada para automatizar a validação do preenchimento correto do formulário e do salvamento de dados.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e eficiente da interface do usuário.

## Instruções de Uso

### 1. Clonar o Repositório

Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/seu-usuario/instivo/teste-frontend/form-cep.git
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Execute o Projeto
```bash
npm run dev
```

### 4. Instalar Cypress
```bash
npm install cypress --save-dev
```

### 5. Abrir Cypress
```bash
npx cypress open
```