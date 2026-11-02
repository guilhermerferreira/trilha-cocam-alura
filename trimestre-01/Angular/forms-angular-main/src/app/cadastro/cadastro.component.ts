import { ConsultaCepService } from './../service/consulta-cep.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  getConsultaCEP(ev: any, form: NgForm) {
    // pega o o valor passado no evento. nesse caso o input
    const cep = ev.target.value;

    if(cep !== ''){
      this.service.consultaCEP(cep).subscribe( dados => {
        this.populaEndereco(dados, form)
      })
    }
  }

  populaEndereco(dados: any, form: NgForm){
    form.form.patchValue({
      endereco: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }


}
