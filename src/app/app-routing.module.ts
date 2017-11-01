import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './views/inicio/inicio.component';

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'login', component: InicioComponent},
    {path: '**', component: InicioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
