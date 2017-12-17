import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {catchError} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {Billet} from "../billet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = 'app';
  errors: string;
  billet: Billet;
  file = 1;
  info: string;
  billet_id = null;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:

  }

  onClick(){
    this.http.post('http://localhost:8000/api/billetcheck/',{id: this.id}).subscribe(data => {
      // Read the result field from the JSON 1:qKlPOxcujQ_KVs60Thy3DAt1X2s

      if(data != null){
        this.id = "";
        this.errors =null;
        if(data.hasOwnProperty('id'))
        {
          this.billet = new Billet(data);
          this.http.post('http://localhost:8000/api/compostages/',{billet: this.billet.id,file: this.file}).subscribe(data=>{
              if(!data.hasOwnProperty('id'))
              {
                this.info = data.toString();
              }

            },
            err => {
              this.errors = JSON.stringify(err);
            })

        }

      }
    },
    err => {
      this.errors = "Le billet n'est pas reconnu !";
      this.id = "";
    }
  );


  }

}
