import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';

const routes: Routes = [
  { path: 'listagem', component: ClientesListagemComponent },
  { path: 'novo', component: NovoClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
