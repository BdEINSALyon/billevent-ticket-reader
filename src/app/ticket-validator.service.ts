import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Billet} from '../billet';
import {Observable} from 'rxjs/Observable';

/***Le service qui communique avec l'api par rapport à la validation de billets
 *
  */
@Injectable()
export class TicketValidatorService {

  static server = 'http://localhost:8000';

  file = 1;

  constructor(private http: HttpClient) {}

  /***Renvoie si le billet existe, et si il a été composté.
   *
   * @param {string} id
   * @returns {Observable<Billet>} le billet ou un message d'erreur
   */
  checkBillet(id: string): Observable<Billet> {
    return Observable.create((obs) =>
      this.http.post('http://localhost:8000/api/billetcheck/', {id: id}).subscribe(data => {
          // Read the result field from the JSON 1:qKlPOxcujQ_KVs60Thy3DAt1X2s
          obs.next(data);
          obs.complete();
        },
        err => {
          obs.error(err);
        }
      ));

  }

  /***Permet de composter le billet
   *
   * @param {Billet} billet
   * @returns {any}
   */
  composterBillet(billet: Billet) {
    return Observable.create((obs) =>
    this.http.post('http://localhost:8000/api/compostages/', {billet: billet.id, file: this.file}).subscribe(
      data => {
        obs.next(data);
        obs.complete();
      },

      err => obs.error(err)
    )

    );
  }

}
