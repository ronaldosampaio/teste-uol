import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';


@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  clienteUrl = "https://demo5283088.mockable.io/customers";

  
  constructor(private http: HttpClient) { }

  listarCliente(){             
    return this.http.get<any[]>(this.clienteUrl);  
  }


}