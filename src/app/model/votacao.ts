import { Cedula } from './cedula';
import { Usuario } from './usuario';

export class Votacao {
    constructor(
        public usuario: Usuario, 
        public cedulas: Cedula[] = []
    ) { }
}
