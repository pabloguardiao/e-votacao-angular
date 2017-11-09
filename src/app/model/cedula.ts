import { Cargo } from './cargo';

export class Cedula {
    constructor(
        public id: string = '',
        public desc: string = '',
        public cargos: Cargo[] = [],
    ) { }
}
