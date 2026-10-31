import { ConsultaCepService } from './../service/consulta-cep.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private service: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(){
      console.log('Formulário enviado');
  }

  getConsultaCEP(ev: any) {
    const cep = ev.target.value;
    this.service.consultaCEP(cep).subscribe( resposta => {
      console.log(resposta)
    })
  }

}
