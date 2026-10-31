import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[idadeValidator], [maiorDeIdadeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: IdadeValidatorDirective,
    multi: true
  }]
})
export class IdadeValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = new Date(control.value).getFullYear();
    const dataAtual = new Date().getFullYear();
  
    const idade = dataAtual - dataNascimento;

    // valida se a data de nascimento é valida com limite de 120 anos
    if (idade > 120 || dataNascimento > dataAtual) {
      return { 'idadeValidator': true } // Erro
    }

    // valida se o usuario possui 18 anos
    if (idade < 18) {
      return { 'maiorDeIdadeValidator': true } // Erro
    }

    return null;
  }

}
