import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Cargo } from './../model/cargo';
import { Candidato } from '../model/candidato';

@Injectable()
export class AppService {

  private cargo: Cargo;
  private contador: number = 0;
  private cargos: Cargo[] = [];

  constructor() { 
    this.cargos.push(new Cargo('Lider de Jovens', [new Candidato('Homem de Ferro', '/assets/homem_de_ferro.jpg'), new Candidato('Captão América', '/assets/captao_america.jpg'), new Candidato('Thor', '/assets/thor.jpg')]));
    this.cargos.push(new Cargo('Lider de Adultos', [new Candidato('Hulk', '/assets/hulk.jpg'), new Candidato('Wolverine', '/assets/woverine.jpg'), new Candidato('Super Homem', '/assets/superman1.jpg')]));
    this.cargos.push(new Cargo('Professor de EBD', [new Candidato('Flash', '/assets/flash.jpg'), new Candidato('Arqueiro Verde', '/assets/arqueiro_verde.jpg'), new Candidato('Supergirl', '/assets/supergirl.jpg')]));
    this.cargos.push(new Cargo('Diácono', [new Candidato('Homem Aranha', '/assets/homem_aranha.jpg')]));
    // this.cargo = new Cargo('Lider de Jovens', [new Candidato('Homem de Ferro', '/assets/homem_de_ferro.jpg'), new Candidato('Captão América', '/assets/captao_america.jpg'), new Candidato('Thor', '/assets/thor.jpg')]);
  }

  getCargo() {
    return this.cargos[this.contador];
  }

  postVoto(candidato: Candidato) {
    if (this.contador < this.cargos.length-1) {
      this.contador++;
    } else {
      this.contador = 0
    }
    console.log('TOTAL: ' + this.cargos.length + ' ATUAL: ' + this.contador);
  }
}
