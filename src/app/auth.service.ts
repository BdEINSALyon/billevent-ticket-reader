import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TicketValidatorService} from './ticket-validator.service';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<string> {
    /**
     *
     * @return the authentification token
     */
    console.log(username);
    return Observable.create((obs) =>
      this.http.post(TicketValidatorService.server + '/api/authenticate', {username: username, password: password}).subscribe(data => {
          // Read the result field from the JSON
          obs.next(data);
          obs.complete();
        },
        err => {
          obs.error(err);
        }
      ));

  }

}
