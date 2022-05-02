import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "pt",
  messages: {
    pt: {
      validation: {
        mixed: {
          default: "é inválido",
          required: "é um campo obrigatório",
          oneOf: "deve ser um dos seguintes valores: {values}",
          notOneOf: "não pode ser um dos seguintes valores: {values}",
        },
        string: {
          length: "deve ter exatamente {length} caracteres",
          min: "deve ter pelo menos {min} caracteres",
          max: "deve ter no máximo {max} caracteres",
          email: "tem o formato de e-mail inválido",
          url: "deve ter um formato de URL válida",
          trim: "não deve conter espaços no início ou no fim.",
          lowercase: "deve estar em maiúsculo",
          uppercase: "deve estar em minúsculo",
        },
        number: {
          min: "deve ser no mínimo {min}",
          max: "deve ser no máximo {max}",
          lessThan: "deve ser menor que {less}",
          moreThan: "deve ser maior que {more}",
          positive: "deve ser um número posítivo",
          negative: "deve ser um número negativo",
          integer: "deve ser um número inteiro",
        },
        date: {
          min: "deve ser maior que a data {min}",
          max: "deve ser menor que a data {max}",
        },
        array: {
          min: "deve ter no mínimo {min} itens",
          max: "deve ter no máximo {max} itens",
        },
      },
    },
    en: {
      validation: {
        mixed: {
          default: "is invalid",
          required: "is a required field",
          oneOf: "must be one of the following values: {values}",
          notOneOf: "cannot be one of the following values: {values}",
        },
        string: {
          length: "must have exactly {length} characters",
          min: "must have at least {min} characters",
          max: "must have at most {max} characters",
          email: "has the invalid e-mail format",
          url: "must have a valid URL format",
          trim: "must not contain spaces at the beginning or end.",
          lowercase: "must be capitalized",
          uppercase: "must be in lowercase",
        },
        number: {
          min: "must be at least {min}",
          max: "should be at most {max}",
          lessThan: "must be smaller than {less}",
          moreThan: "must be greater than {more}",
          positive: "must be a positive number",
          negative: "must be a negative number",
          integer: "must be an integer",
        },
        date: {
          min: "must be greater than the date {min}",
          max: "must be less than the date {max}",
        },
        array: {
          min: "must have at least {min} items",
          max: "should be at most {max} items",
        },
      },
    },
  },
});

export default i18n;
