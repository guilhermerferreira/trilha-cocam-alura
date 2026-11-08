import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly url_API = 'https://www.googleapis.com/books/v1/volumes'
  private readonly key_API = 'AIzaSyD34hMKyQ1RxsF1Z4a2xOgazpjSDubevXk';

  constructor(private http: HttpClient) { }

  busca(campoBusca: string): Observable<Item[]> {
    const params = new HttpParams()
      .append('q', campoBusca)
      .append('key', this.key_API);

    return this.http.get<LivrosResultado>(this.url_API, { params }).pipe(
      tap(retornoAPI => console.log(retornoAPI)),
      map(resultado => resultado.items),
    );
  }


}

