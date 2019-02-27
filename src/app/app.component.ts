import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
              
})
export class AppComponent implements OnInit  {
  
  constructor(private router: Router) { }

  principal() {
    this.router.navigate(['listagem']);
  }


  /*
  title = 'teste-uol';

  constructor(private http: Http) { }

  clientes = [];
  clienteObj:object={}

	fetchData = function(){
		 this.http.get('https://demo5283088.mockable.io/customers').subscribe(
       (res:Response)=> {
         this.clientes=res.json();
       }
     )
  }
  
  addNewCliente = function(cliente){
    this.clienteObj = {
      "id":cliente._id,
      "nome": cliente.name,
      "cpf": cliente.cpf,
      "email":cliente.contact.email,
      "status": cliente.status

    }
    this.http.post("https://demo5283088.mockable.io/customers/", this.clienteObj)
             .subscribe((res:Response) => {
                     console.log(res);
    })
  }
*/
  ngOnInit() {
    this.principal()
  }
}
