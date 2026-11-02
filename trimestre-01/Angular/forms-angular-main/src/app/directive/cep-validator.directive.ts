import { ConsultaCepService } from './../service/consulta-cep.service';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Directive({
  selector: '[cepValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: CepValidatorDirective,
    multi: true
  }]
})
export class CepValidatorDirective implements AsyncValidator {

  constructor(private service: ConsultaCepService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.service.consultaCEP(cep).pipe(map( (resultado: any) => 
      resultado.erro ? { 'cepValidator': true } : null
    ))
  }


}
