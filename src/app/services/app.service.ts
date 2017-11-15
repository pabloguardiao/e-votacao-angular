import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Cargo } from './../model/cargo';
import { Candidato } from '../model/candidato';
import { Cedula } from './../model/cedula';
import { Util } from './../util';

@Injectable()
export class AppService {

  // private cargo: Cargo;
  private contador: number = 0;
  private cedula: Cedula;

  constructor() { 
    this.cedula = new Cedula('DESCRICAO', [
      new Cargo('Lider de Jovens', [new Candidato('Homem de Ferro', '/assets/homem_de_ferro.jpg'), new Candidato('Captão América', '/assets/captao_america.jpg'), new Candidato('Thor', '/assets/thor.jpg')]),
      new Cargo('Lider de Adultos', [new Candidato('Hulk', '/assets/hulk.jpg'), new Candidato('Wolverine', '/assets/woverine.jpg'), new Candidato('Super Homem', '/assets/superman1.jpg')]),
      new Cargo('Professor de EBD', [new Candidato('Flash', '/assets/flash.jpg'), new Candidato('Arqueiro Verde', '/assets/arqueiro_verde.jpg'), new Candidato('Supergirl', '/assets/supergirl.jpg')]),
      new Cargo('Diácono', [new Candidato('Homem Aranha', '/assets/homem_aranha.jpg')], 'C')
    ]);
  }

  getCargo() {
    console.log("CONTADOR: " + this.contador);
    return this.cedula.cargos[this.contador];
  }

  registrarVoto(candidato: Candidato, cargo: Cargo) {
    if (this.contador < this.cedula.cargos.length-1) {
      this.contador++;
    } else {
      this.contador = 0
    }
    console.log('TOTAL: ' + this.cedula.cargos.length + ' ATUAL: ' + this.contador);
    this.contabilizarVoto(candidato, cargo);
    console.log(this.cedula);
  }

  contabilizarVoto(candidato: Candidato, cargo: Cargo) {
    this.cedula.cargos.forEach(c => {
      // console.log(cargo);
      if (c.nome === cargo.nome) {
        cargo.candidatos.forEach( cand => {
          // console.log(candidato);
          if (cand.nome === candidato.nome) {
            cand.qtdVotos++;
          }
        });
      }
    });
  }
}
