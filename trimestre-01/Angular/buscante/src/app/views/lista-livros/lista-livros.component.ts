import { Component } from '@angular/core';
import { Item, Livro } from 'src/app/models/interfaces';
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
      next: livros => this.listaLivros = this.itemParaLivro(livros),
      error: erro => console.log(erro),
    })
  }



  // Percorre a resposta do service: Array de Item e transforma em um Array de Livro
  itemParaLivro(items): Livro[] {
    const livros: Livro[] = [];

    items.forEach(item => {
      livros.push( this.livro = {
        title: item.volumeInfo?.title,
        authors: item.volumeInfo?.authors,
        publisher: item.volumeInfo?.publisher,
        publishedDate: item.volumeInfo?.publishedDate,
        description: item.volumeInfo?.description,
        previewLink: item.volumeInfo?.previewLink,
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
      })
    });
    return livros;
  }




}



