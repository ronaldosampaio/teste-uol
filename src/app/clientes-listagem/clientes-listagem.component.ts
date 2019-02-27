import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

import * as $ from 'jquery';



@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.css']
})
export class ClientesListagemComponent implements OnInit {
  /*
  clientes=[{
    "id":1, 
    "nome":"Ronaldo Freire Sampaio", 
    "cpf":"272.927.738.26",
    "email":"ronaldo-sampaio@hotmail.com",
    "telefone":"(11)94967-7803",
    "status":"ativo"
  }]
*/

clientes: Array<any>;
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    
    this.listaDeCliente();

  }
  listaDeCliente(){
    this.clienteService.listarCliente()
                       .subscribe(data=> this.clientes=data)
  }

}
