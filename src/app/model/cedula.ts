import { Cargo } from './cargo';
import { Util } from './../util';

export class Cedula {
    public _id: string = Util.makeid();
    constructor(
        public desc: string = '',
        public cargos: Cargo[] = [],
    ) { }

    // https://getbootstrap.com/docs/3.3/css/#images
}
