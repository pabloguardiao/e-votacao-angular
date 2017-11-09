import { Component, OnInit, Output, Input } from '@angular/core';
// import { Router } from '@angular/router';

import { Cargo } from './../../model/cargo';
import { Candidato } from './../../model/candidato';
import { AppService } from './../../services/app.service';

@Component({
  selector: 'comp-cedula',
  templateUrl: './cedula.component.html',
  styleUrls: ['./cedula.component.css']
})
export class CedulaComponent implements OnInit {

  public cargo: Cargo;
  
  @Input()
  public selecionado: Candidato;

  constructor(
    // private router: Router, 
    private appService: AppService
  ) { }

  ngOnInit() {
    this.selecionado = null;
    this.cargo = this.appService.getCargo();
  }

  selecionarCandidato(selecionado: Candidato) {
    // this.confirmacao = true;
    this.selecionado = selecionado;
    // console.log(selecionado.nome);
    // this.router.navigate(['/confirma', event]);
  }

  confirmarCandidato(selecionado: Candidato) {
    this.appService.registrarVoto(selecionado, this.cargo);    
    this.selecionado = null;
    this.cargo = this.appService.getCargo();
  }

  cancelarConfirmacao() {
    this.selecionado = null;
    this.cargo = this.appService.getCargo();
  }
}
