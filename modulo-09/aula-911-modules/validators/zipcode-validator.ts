/**
 * arquivo: zipcode-validator.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 05/08/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Validator } from "./validator";

class ZipCodeValidator implements Validator {
  isValid(s: string): boolean {
    const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{3})?$/;

    return zipCodeRegex.test(s);
  }
}

export { ZipCodeValidator }