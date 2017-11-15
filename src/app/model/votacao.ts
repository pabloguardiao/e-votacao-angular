import { Cedula } from './cedula';
import { Usuario } from './usuario';
import { Util } from './../util';

export class Votacao {
    public _id: string = Util.makeid();
    constructor(
        public usuario: Usuario, 
        public cedulas: Cedula[] = []
    ) { }
}
