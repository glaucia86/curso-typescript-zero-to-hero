/**
 * arquivo: main.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 05/08/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { EmailValidator, ZipCodeValidator } from "./validators";

let email = 'glaucia.lemos@email.com';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`O e-mail ${email} é válido? ${result}`);

let validator2 = new ZipCodeValidator();
let result2 = validator2.isValid('12345');

console.log(`O CEP 12345 é válido? ${result2}`);