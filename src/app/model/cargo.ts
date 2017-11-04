import { Candidato } from './candidato';

export class Cargo {
    constructor(
        public nome: string = '',
        public candidatos: Candidato[] = [], 
        public tipo: string = 'U' // U=Voto único, M=Voto múltiplo, C=Candidato para confirmação
    ) { }
}
