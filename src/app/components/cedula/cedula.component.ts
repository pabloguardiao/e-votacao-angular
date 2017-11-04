import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  // public confirmacao: boolean = false;

  constructor(private router: Router
    , private appService: AppService
  ) { }

  ngOnInit() {
    this.cargo = this.appService.getCargo();
  }

  selecionarCandidato(event: Candidato) {
    // this.confirmacao = true;
    console.log(event.nome);
    this.router.navigate(['/confirma', event]);
  }
}
