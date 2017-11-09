import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

import { Candidato } from './../../model/candidato';
import { AppService } from './../../services/app.service';

@Component({
  selector: 'comp-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

  @Input()
  public candidato: Candidato;

  @Output()
  public confirma = new EventEmitter();

  @Output()
  public cancela = new EventEmitter();

  constructor(
    // private route: ActivatedRoute, 
    // private router: Router,
    private appService: AppService
  ) { 
    // this.route.params.subscribe((cand: Candidato) => {
    //   this.candidato = cand;
    // });
  }

  ngOnInit() {
  }

  confirmar() {
    console.log("CONFIRMADO!");
    this.confirma.emit({selecionado: this.candidato});
    // this.router.navigate(['/']);
  }

  cancelar() {
    console.log("CANCELADO!");
    this.cancela.emit({selecionado: this.candidato});
  }
}
