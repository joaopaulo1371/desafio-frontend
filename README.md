# TesteFrontend

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 19.0.6.

## Passo a Passo para Executar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

### 2. Instalar Dependências

Instale todas as dependências necessárias usando o npm:

```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Uma vez que o servidor esteja em execução, abra seu navegador e navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você modificar qualquer um dos arquivos de origem.

### 4. Executar Testes Unitários

Para executar testes unitários com o test runner [Karma](https://karma-runner.github.io), use o seguinte comando:

```bash
ng test
```

### 5. Executar Testes de Ponta a Ponta

Para testes de ponta a ponta (e2e), execute:

```bash
ng e2e
```

O Angular CLI não vem com um framework de testes de ponta a ponta por padrão. Você pode escolher um que atenda às suas necessidades.

### 6. Construir o Projeto

Para construir o projeto para produção, execute:

```bash
ng build --prod
```

Isso irá compilar seu projeto e armazenar os artefatos de construção no diretório `dist/`. Por padrão, a construção de produção otimiza sua aplicação para desempenho e velocidade.

### 7. Executar a Aplicação em Produção

Para executar a aplicação em produção, você pode usar um servidor HTTP simples como o `http-server`:

```bash
npm install -g http-server
http-server ./dist/<NOME_DO_PROJETO>
```

Abra seu navegador e navegue para `http://localhost:8080` para ver a aplicação em produção.

## Criação de Código

O Angular CLI inclui várias ferramentas de criação de código. Para gerar um novo componente, execute:

```bash
ng generate component nome-do-componente
```

Para uma lista completa de esquemas disponíveis (como `components`, `directives` ou `pipes`), execute:

```bash
ng generate --help
```

## Recursos Adicionais

Para mais informações sobre o uso do Angular CLI, incluindo referências detalhadas de comandos, visite a página [Visão Geral e Referência de Comandos do Angular CLI](https://angular.dev/tools/cli).
