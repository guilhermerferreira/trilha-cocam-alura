import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: "Meu pensamento",
    autoria: "Guilherme",
    modelo: "modelo1",
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = []

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256){
      return "pensamento-g"
    }
    return "pensamento-p"
  }

  statusFavorito(): string {
    if (this.pensamento.favorito === true) {
      return 'botao-favoritado'
    } else {
      return 'botao-favoritar'
    }
  }

  alterarFavorito(): void {
    this.service.alterarFavorito(this.pensamento).subscribe( () => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    })
  }

}
