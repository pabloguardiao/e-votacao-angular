import { Util } from './../util';

export class Candidato {
    public _id: string = Util.makeid();
    constructor(
        public nome: string = '', 
        public foto: string = '',
        public qtdVotos: number = 0
    ) { }
}
