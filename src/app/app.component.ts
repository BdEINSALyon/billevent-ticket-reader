import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Billet} from '../billet';
import {TicketValidatorService} from './ticket-validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  JWT: string;
  file: number;
}
