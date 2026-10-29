import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from 'rxjs';


@Injectable({ // classe Injetável
  providedIn: 'root' // visivel em toda a aplicação
})
export class PensamentoService {

  private readonly API = "http://localhost:3000/pensamentos";

  // A injeção de dependência no angular acontece no construtor
  // o modificador private faz com que esse atributo seja declarado automaticamente
  constructor(private http: HttpClient) { }

  listar(pagina: number, busca: string, favorito: boolean): Observable<Pensamento[]>{
    const limit = 3;

    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', limit);
      if (busca.trim().length > 2) {
        params = params.set('q', busca)
      }
      if (favorito) {
        params = params.set('favorito', true)
      }

    // é considerada uma má prática passar os dados diretos na url como abaixo
    // return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${limit}`)

    return this.http.get<Pensamento[]>(this.API, { params: params })
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  alterarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito;
    return this.editar(pensamento);
  }

  excluir(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }



}
