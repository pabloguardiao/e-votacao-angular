import { Util } from './../util';
import { Candidato } from './candidato';

export class Cargo {
    public _id: string = Util.makeid();
    constructor(
        public nome: string = '',
        public candidatos: Candidato[] = [], 
        public tipo: string = 'U' // U=Voto único, M=Voto múltiplo, C=Candidato para confirmação
    ) { }
}
