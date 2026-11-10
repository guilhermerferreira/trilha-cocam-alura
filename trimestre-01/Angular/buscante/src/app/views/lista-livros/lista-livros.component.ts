import { Component } from '@angular/core';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  listaLivros: Livro[];
  campoBusca: string;
  livro: Livro;

  constructor(private livroService: LivroService) { }


  buscaLivros() {
    this.livroService.busca(this.campoBusca).subscribe({
      next: items => this.listaLivros = this.livrosResultadoParaLivro(items),
      error: erro => console.log(erro),
    })
  }


  // Percorre um array de item e para cada item cria um livroVolumeInfo
  livrosResultadoParaLivro(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => new LivroVolumeInfo(item))
  }




}



