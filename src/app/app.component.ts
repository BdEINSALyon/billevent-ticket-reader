import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {Billet} from "../billet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = 'app';
  results: string;
  fileid = 1;


  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:

  }

  onClick(){

    this.http.post('http://localhost:8000/api/billetcheck/',{id: this.id}).subscribe(data => {
      // Read the result field from the JSON 1:qKlPOxcujQ_KVs60Thy3DAt1X2s

      if(data != null){
        this.results = JSON.stringify(data);
      }
        this.results+= "Slutttt";
    });
  }
}
