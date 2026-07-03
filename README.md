**Automação E2E e API - ServeRest**

Projeto de testes automatizados desenvolvido com Cypress e TypeScript, focado na garantia de qualidade da aplicação ServeRest, um e-commerce simulado.

Este projeto abrange testes de Interface de Utilizador (UI) e Testes de API, demonstrando boas práticas de arquitetura de testes e validação de software.

**Tecnologias Utilizadas**

**Cypress:** Framework de testes E2E e API.

**TypeScript:** Adiciona tipagem estática, tornando o código mais seguro.

**Faker.js:** Biblioteca para geração de dados dinâmicos (e-mails, nomes, senhas) a cada execução, evitando dados estáticos ("chumbados") e falsos positivos.

**Arquitetura e Padrões**

**Page Object Model (POM):** Os testes de interface foram estruturados utilizando POM. Os seletores (IDs, classes) estão separados da lógica do teste, facilitando a manutenção caso a interface mude.

**Factories:** Utilização de fábricas de dados para construir objectos de teste complexos e dinâmicos para a API de forma limpa.

**Isolamento:** Testes de API validam as regras de negócio do back-end, enquanto os testes E2E validam a jornada do utilizador.

**Estrutura do Projeto**:
cypress/e2e/ui/ # Testes de Interface E2E;
cypress/e2e/api/ # Testes diretos ao Back-end (ex: cy.request);
cypress/support/factories/ # Massa de dados dinâmica (Faker.js);
cypress/support/pages/ # Page Objects (Mapeamento de elementos e ações da UI);


