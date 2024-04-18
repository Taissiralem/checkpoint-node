import generatePassword from "password-generator";

const password = generatePassword({ length: 12, symbols: true, numbers: true });
console.log("Generated password:", password);
