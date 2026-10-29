import { AbstractControl, ValidationErrors } from "@angular/forms";
// AbstractControl é a classe pai do formulario Reativo

// angular exige que ele seja passado como parametro
export function lowerCase(control: AbstractControl) : ValidationErrors | null {
  const valor = control.value as string
  if (valor !== valor.toLocaleLowerCase()) {
    return { minusculo: true }; // rtorna o erro
  } else {
    return null; // sem erro - passou
  }
}

