import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  nomeItem!: Item;

  private listaDeCompra!: Item[];


  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]')
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItemCompra(nomeItem: string): Item {
    const id = this.listaDeCompra.length + 1;
    const item = {
      id: id,
      nome: nomeItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false,
    }

    return item;
  }

  adicionarItem(nomeItem: string): void {
    this.listaDeCompra.push(this.criarItemCompra(nomeItem));
    console.log(this.listaDeCompra.length)
  }

  editarItem(itemAntigo: Item, nomeNovoItem: string) {
    const itemEditado = {
      id: itemAntigo.id,
      nome: nomeNovoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: itemAntigo.comprado
    }

    const id = this.listaDeCompra.findIndex(item => item.id === itemAntigo.id)
    this.listaDeCompra.splice(id, 1, itemEditado);
  }

  deletarItem(idItem: number) {
    const id = this.listaDeCompra.findIndex(item => item.id == idItem)
    this.listaDeCompra.splice(id, 1);
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }


}
