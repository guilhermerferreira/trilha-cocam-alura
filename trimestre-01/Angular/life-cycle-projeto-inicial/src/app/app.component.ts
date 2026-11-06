import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';

  itemParaSerEditado!: Item;
  listaDeCompras: Array<Item> = []

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompras = this.listaService.getListaDeCompra()
    console.log(this.listaDeCompras);
  }

  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage();
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number) {
    this.listaService.deletarItem(id);
  }

}
