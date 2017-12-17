import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {catchError} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = 'app';
  errors: string;
  billet: Object;


  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:

  }

  onClick(){
    this.http.post('http://localhost:8000/api/billetcheck/',{id: this.id}).subscribe(data => {
      // Read the result field from the JSON 1:qKlPOxcujQ_KVs60Thy3DAt1X2s

      if(data != null){
        this.billet = data;
        this.id = "";
        this.errors =null;
      }
    },
    err => {
      this.errors = "Le billet n'est pas reconnu !";
      this.id = "";
    }
  );

  }

}
