import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-erro',
  templateUrl: './msg-erro.component.html',
  styleUrls: ['./msg-erro.component.css']
})
export class MsgErroComponent implements OnInit {

  @Input() mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
