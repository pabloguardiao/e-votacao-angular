import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Candidato } from './../../model/candidato';
import { AppService } from './../../services/app.service';

@Component({
  selector: 'comp-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

  public candidato: Candidato;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private appService: AppService
  ) { 
    this.route.params.subscribe((cand: Candidato) => {
      this.candidato = cand;
    });
  }

  ngOnInit() {
    // this.candidato = new Candidato('Captão América', 'http://2.bp.blogspot.com/-ZoaWp2ucksc/T9tkovDQtRI/AAAAAAAAAVY/AaoEUOfRv9w/s320/capitao_america_02.jpg');
  }

  confirmar() {
    console.log("CONFIRMADO!");
    this.appService.postVoto(this.candidato);
    this.router.navigate(['/']);
  }

  cancelar() {
    console.log("CANCELADO!");
    this.router.navigate(['/']);
  }
}
