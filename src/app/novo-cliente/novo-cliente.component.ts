import { Component, OnInit } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  constructor(private http: HttpClient) { }
  clienteObj: object={}
  clienteUrl = "https://demo5283088.mockable.io/customers";
    
  salvarCliente = function(form){
     this.clienteObj={
         "_id": form.id,
         "name": form.name,
         "cpf": form.cpf,
         "email": form.email,
         "tel": form.tel,
         "status": form.status
     }
     this.http.post('clienteUrl', this.clienteObj)
              .subscribe((res:Response)=>{
                console.log(res);
                console.log("teste", form);
              })
              error => {
                console.log("Mensagem de erro", error)
              };
              
  }

  ngOnInit() {
  }

}
