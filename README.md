# Exercício React Testing Library (RTL)

Este projeto é um exercício prático desenvolvido durante o curso da EBAC para aprender e aplicar conceitos de testes em aplicações React utilizando a React Testing Library.

## 🎯 Objetivo

O projeto implementa uma aplicação simples de posts com sistema de comentários, focando na prática de testes automatizados para componentes React.

## 🚀 Tecnologias Utilizadas

- **React 18**
- **TypeScript**
- **React Testing Library**
- **Jest**
- **CSS Modules**

## 📋 Funcionalidades

- ✅ Exibição de posts com imagem e texto
- ✅ Sistema de comentários dinâmico
- ✅ Adição de novos comentários
- ✅ Interface responsiva
- ✅ Testes automatizados para componentes

## 🛠️ Estrutura do Projeto

```
src/
├── components/
│   ├── Post/
│   │   ├── index.tsx
│   │   └── Post.module.css
│   └── PostComments/
│       ├── index.tsx
│       ├── PostComments.module.css
│       └── PostComments.test.tsx
├── models/
│   └── Comment.ts
├── App.tsx
├── App.module.css
└── ...
```

## 🧪 Testes Implementados

O projeto inclui testes automatizados para o componente `PostComments`:

- **Renderização**: Verifica se o componente é renderizado corretamente
- **Funcionalidade**: Testa a adição de múltiplos comentários
- **Interação**: Simula interações do usuário com formulários

### Comandos de Teste

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm test -- --watch

# Executar testes com coverage
npm test -- --coverage
```

## 🚦 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Sulivan7/ebac_exercicio_rtl.git
```

2. Acesse o diretório do projeto:

```bash
cd ebac_exercicio_rtl
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

### Executando a Aplicação

```bash
# Modo desenvolvimento
npm start
# ou
yarn start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
# ou
yarn build
```

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm test` - Executa os testes
- `npm run build` - Cria build de produção
- `npm run eject` - Ejeta as configurações do CRA

## 📚 Exercício Original

O arquivo onde o teste principal está implementado: `src/components/PostComments/PostComments.test.tsx`

### Resolução

Neste repositório existe uma branch chamada **resolucao** com o exercício resolvido, é importante que a utilize como consulta caso tenha dificuldades ou até mesmo para comparar com a abordagem que você adotou.
