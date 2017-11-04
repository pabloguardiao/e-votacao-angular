import { AppService } from './services/app.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponentsModule } from './components/list-components.module';
import { AppServicesModule } from './services/app-services.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListComponentsModule,
    AppServicesModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
