import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './views/inicio/inicio.component';
import { ConfirmacaoComponent } from './components/confirmacao/confirmacao.component';

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'confirma', component: ConfirmacaoComponent},
    {path: '**', component: InicioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
