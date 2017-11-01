import { Candidato } from './../../model/candidato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-cedula',
  templateUrl: './cedula.component.html',
  styleUrls: ['./cedula.component.css']
})
export class CedulaComponent implements OnInit {

  public candidatos: Candidato[] = [];

  constructor() { }

  ngOnInit() {
    this.candidatos.push(new Candidato('Pablo', 'https://img.ibxk.com.br/2015/06/09/09122000492412.jpg'));
    this.candidatos.push(new Candidato('JP', 'https://vignette.wikia.nocookie.net/thor/images/d/da/Captain-america-wallpaper.jpg/revision/latest/scale-to-width-down/640?cb=20130718004302'));
  }

}
