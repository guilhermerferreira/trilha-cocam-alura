import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = []
  paginaAtual: number = 1;
  temPensamento: boolean = true;
  filtro: string = '';
  favorito: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural'

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe( pensamentos => {
      this.listaPensamentos = pensamentos
    })
  }

  listarFavoritos() {
    this.paginaAtual = 1;
    this.temPensamento = true;
    this.favorito = true;
    this.titulo = 'Meus Favoritos';

    return this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe( pensamentos => {
      this.listaPensamentos = pensamentos
      this.listaFavoritos = pensamentos
    })
  }

  carregarMais() {
    return this.service.listar(++this.paginaAtual, this.filtro, this.favorito).subscribe( pensamentos => {
      this.listaPensamentos.push(...pensamentos)
      if (!pensamentos.length) {
        this.temPensamento = false;
      }
    })
  }

  buscarPensamento() {
    this.paginaAtual = 1;
    this.temPensamento = true;

    return this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe( pensamentos => {
      this.listaPensamentos = pensamentos
    })
  }


}

