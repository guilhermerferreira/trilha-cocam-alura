import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  url_api = 'https://viacep.com.br/ws/'

  constructor(private http: HttpClient) { }


  consultaCEP(cep: string) {
    return this.http.get(`${this.url_api}${cep}/json`)
  }

}
