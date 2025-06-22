# Validação e Identificação de Bandeira de Cartão de Crédito

Este projeto identifica a bandeira de um cartão de crédito a partir do número informado, utilizando validação pelo algoritmo de Luhn e padrões de prefixos.

## Estrutura do Projeto

```
assets/
  bandeiras_credit_cards.png
  prefixos_credit_cards.png
src/
  index.js
```

- `src/index.js`: Implementa a função principal de identificação da bandeira do cartão.
- `assets/`: Imagens de apoio sobre bandeiras e prefixos de cartões.

## Como Usar

No arquivo [`src/index.js`](src/index.js), utilize a função `getCardBrand` passando o número do cartão como string:

```js
const brand = getCardBrand("4111111111111111");
console.log(brand); // Visa
```

Exemplos de uso já estão presentes no final do arquivo.

## Bandeiras Suportadas

- Visa
- Mastercard
- American Express
- Diners Club
- Elo
- Hipercard
- Discover
- JCB
- Aura
- UnionPay

## Requisitos

- Node.js (para executar o arquivo JS)

## Execução

No terminal, execute:

```sh
node src/index.js
```

## Licença
