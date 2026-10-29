import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { lowerCase } from './minusculoValidator';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {


  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      "conteudo": ['', Validators.compose([ // Validações
        Validators.required, // campo obrigatorio
        Validators.pattern(/(.|\s)*\S(.|\s)*/) // nao permite que seja apenas espaços
      ])],
      "autoria": ['', Validators.compose([
        Validators.required, // campo obrigatorio
        Validators.minLength(3), // minimo 3 caracteres
        lowerCase // Validator personalizado
      ])],
      "modelo": ['modelo1'],
      "favorito": [false]
    })
  }

  criarPensamento() {
    if(this.formulario.valid){ // Se o formulario for valido ele passa
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
