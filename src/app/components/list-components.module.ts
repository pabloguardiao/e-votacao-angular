import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoComponent } from './candidato/candidato.component';
import { CedulaComponent } from './cedula/cedula.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CandidatoComponent, CedulaComponent, ConfirmacaoComponent],
  exports: [CandidatoComponent, CedulaComponent]
})
export class ListComponentsModule { }
