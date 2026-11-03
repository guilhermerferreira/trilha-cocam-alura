import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  nomeItem!: string;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem() {
    this.listaService.adicionarItem(this.nomeItem);
  }
}
