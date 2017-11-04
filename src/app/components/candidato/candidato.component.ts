import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Candidato } from './../../model/candidato';

@Component({
  selector: 'comp-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {
  
  @Input()
  public candidato: Candidato;

  @Output()
  selecao = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  selecionouCandidato() {
    // console.log(this.candidato);
    this.selecao.emit({selecionado: this.candidato});
  }
}
