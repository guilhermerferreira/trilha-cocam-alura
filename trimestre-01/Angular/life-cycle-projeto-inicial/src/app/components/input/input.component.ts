import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemQueVaiSerEditado!: Item;
  nomeItem!: string;
  editando: boolean = false;
  textoBtn: string = 'Salvar item';
  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.nomeItem = this.itemQueVaiSerEditado.nome;
    }
  }

  limparCampo() {
    this.nomeItem = '';
  }

  adicionarItem() {
    this.listaService.adicionarItem(this.nomeItem);
    this.limparCampo();
  }

  editarItem() {
    this.listaService.editarItem(this.itemQueVaiSerEditado, this.nomeItem);
    this.limparCampo()
    this.editando = false;
    this.textoBtn = 'Salvar item';
  }

}
