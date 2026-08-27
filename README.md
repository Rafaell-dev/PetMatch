# PetMatch - Sistema de Adoção de Animais

O **Sistema de Adoção de Animais** é uma plataforma projetada para listar e gerenciar animais disponíveis para adoção, facilitando o encontro de um novo lar para animais de estimação.

## Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O servidor iniciará em [http://localhost:8080](http://localhost:8080).

## Endpoint

### Listar Animais
Retorna uma lista de todos os animais cadastrados.

* **URL:** `/api/animais`
* **Método:** `GET`
* **Status de Retorno:** `200 OK`
* **Tipo de Conteúdo:** `application/json`

#### Exemplo de Resposta:

```json
[
  {
    "id": 1,
    "nome": "Rex",
    "especie": "Cachorro",
    "idade": 3,
    "disponivel": true
  },
  {
    "id": 2,
    "nome": "Mia",
    "especie": "Gato",
    "idade": 2,
    "disponivel": true
  },
  {
    "id": 3,
    "nome": "Luna",
    "especie": "Cachorro",
    "idade": 1,
    "disponivel": true
  }
]
```

## Workflow Git

Este projeto segue o fluxo de trabalho **Gitflow**:

* A branch `main` contém o código estável e pronto para produção.
* Cada nova funcionalidade deve ser desenvolvida em sua própria branch de funcionalidade, nomeada com o padrão `feature/<nome-da-funcionalidade>`.
* **É estritamente proibido realizar commits diretos na branch `main`.**
* Para integrar novas funcionalidades à branch `main`, deve-se abrir um **Pull Request (PR)**, o qual deve passar por revisão antes de ser mesclado.
