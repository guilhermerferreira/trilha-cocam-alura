import { Item } from './../../interfaces/iItem';
import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdDoItemParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() { }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem() {
    this.emitindoIdDoItemParaDeletar.emit(this.item.id);
  }


  alterarStatusComprado() {
    if (this.item.comprado === true) {
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }


}
