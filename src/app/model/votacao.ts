import { Cargo } from './cargo';
import { Usuario } from './usuario';

export class Votacao {
    constructor(public usuario: Usuario, public cedulas: Cargo[] = []) {

    }
}
