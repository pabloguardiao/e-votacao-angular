import { Candidato } from './../../model/candidato';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comp-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {
  
  @Input()
  public candidato: Candidato;
  
  constructor() { }

  ngOnInit() {
  }

}
