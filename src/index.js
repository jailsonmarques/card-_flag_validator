function getCardBrand(cardNumber) {
  if (typeof cardNumber !== "string") return "Desconhecida";

  // Remove tudo que não for dígito
  const number = cardNumber.replace(/\D/g, "");

  // Verifica se o número tem entre 13 e 19 dígitos (padrão internacional)
  if (number.length < 13 || number.length > 19) return "Desconhecida";

  // Luhn Algorithm para validação do cartão
  function isValidLuhn(num) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = num.length - 1; i >= 0; i--) {
      let digit = parseInt(num.charAt(i), 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  }

  if (!isValidLuhn(number)) return "Desconhecida";

  const patterns = [
    { brand: "Visa", regex: /^4/ },
    { brand: "Mastercard", regex: /^(5[1-5]|2[2-7])/ },
    { brand: "American Express", regex: /^(34|37)/ },
    { brand: "Diners Club", regex: /^(36|38)/ },
    { brand: "Elo", regex: /^6/ },
    { brand: "Hipercard", regex: /^6/ },
    {
      brand: "Discover",
      regex:
        /^(6011|65|64[4-9]|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[01][0-9]|92[0-5]))/,
    },
    { brand: "JCB", regex: /^35(2[89]|[3-8][0-9])/ },
    { brand: "Aura", regex: /^50/ },
    { brand: "UnionPay", regex: /^62/ },
  ];

  for (const { brand, regex } of patterns) {
    if (regex.test(number)) {
      return brand;
    }
  }
  return "Desconhecida";
}

// Exemplos de uso:
console.log(getCardBrand("4111111111111111")); // Visa
console.log(getCardBrand("5105105105105100")); // Mastercard
console.log(getCardBrand("6011111111111117")); // Discover
