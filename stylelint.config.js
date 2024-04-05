module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    // Personaliza las reglas según sea necesario
    "color-no-invalid-hex": true, // Prohibir valores de color inválidos
    "declaration-block-no-duplicate-properties": true, // Prohibir propiedades duplicadas dentro de un bloque de declaraciones
    "declaration-block-trailing-semicolon": "always", // Siempre requiere un punto y coma al final de un bloque de declaraciones
    "selector-pseudo-element-colon-notation": "double", // Requiere la notación de dos puntos para pseudo-elementos (::)
    "string-quotes": "single", // Requiere comillas simples para cadenas de texto
    // Agrega más reglas personalizadas según sea necesario
  },
};
