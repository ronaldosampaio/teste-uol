import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';
import { ClienteService } from './cliente.service';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesListagemComponent,
    NovoClienteComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
