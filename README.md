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

---

### Cadastrar Animal
Cadastra um novo animal para adoção.

* **URL:** `/api/animais`
* **Método:** `POST`
* **Tipo de Conteúdo:** `application/json`

#### Body da Requisição:

```json
{
  "nome": "Thor",
  "especie": "Cachorro",
  "idade": 4
}
```

| Campo     | Tipo     | Obrigatório | Descrição                        |
|-----------|----------|-------------|----------------------------------|
| `nome`    | `string` | Sim         | Nome do animal                   |
| `especie` | `string` | Sim         | Espécie do animal                |
| `idade`   | `number` | Sim         | Idade do animal (>= 0)          |

#### Resposta de Sucesso:

* **Status:** `201 Created`

```json
{
  "id": 4,
  "nome": "Thor",
  "especie": "Cachorro",
  "idade": 4,
  "disponivel": true
}
```

> O `id` é gerado automaticamente pelo sistema e o campo `disponivel` é definido como `true`.

#### Resposta de Erro:

* **Status:** `400 Bad Request`

```json
{
  "message": "Nome, espécie e idade são obrigatórios"
}
```

#### Códigos de Status:

| Código | Descrição                         |
|--------|-----------------------------------|
| `201`  | Animal cadastrado com sucesso     |
| `400`  | Dados inválidos ou ausentes       |


## Workflow Git

Este projeto segue o fluxo de trabalho **Gitflow**:

* A branch `main` contém o código estável e pronto para produção.
* Cada nova funcionalidade deve ser desenvolvida em sua própria branch de funcionalidade, nomeada com o padrão `feature/<nome-da-funcionalidade>`.
* **É estritamente proibido realizar commits diretos na branch `main`.**
* Para integrar novas funcionalidades à branch `main`, deve-se abrir um **Pull Request (PR)**, o qual deve passar por revisão antes de ser mesclado.
