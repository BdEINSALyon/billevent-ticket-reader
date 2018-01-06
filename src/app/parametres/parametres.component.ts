import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {

  errors: string;
  username: string;
  password: string;
  file: number;

  constructor(private auth_service: AuthService) {

  }

  ngOnInit() {
  }

  submit() {
      this.auth_service.authenticate(this.username, this.password).subscribe(
        (token) => {
          AppComponent.JWT = token;
          AppComponent.file = this.file;

        },
            (error) => this.errors = 'Authentification échouée !'

      );

  }

}
