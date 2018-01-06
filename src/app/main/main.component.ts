import { Component, OnInit } from '@angular/core';
import {Billet} from '../../billet';
import {TicketValidatorService} from '../ticket-validator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  /***L'ID du billet en cours de vérification
   *
   * @type {string}
   */
  id = '';
  /***Stocke les messages d'erreur
   *
   */
  errors: string;
  /**Le billet en cours de vérification, une fois qu'on sait qu'il existe
   *
   */
  billet: Billet;
  /***Stocke les informations
   *
   */
  info: string;

  constructor(private ticket_validator: TicketValidatorService) {}

  ngOnInit(): void {
    // Make the HTTP request:

  }

  /*** Fonction appelée lors d'un click sur le bouton envoyer, ou lors d'un scan avec la douchette
   *
   */
  onClick() {
    // On demande d'abord au service si le billet existe
    this.ticket_validator.checkBillet(this.id).subscribe(
      (billet) => {
        // Si il y a un billet, on parse les données et on le composte
        this.billet = new Billet(billet);
        this.ticket_validator.composterBillet(this.billet).subscribe(
          // Si les données renvoyées sont une suite de caractère => y'a une erreur !
          compostage => {
            // PHILIPPE ALED
            if (typeof(compostage) !== 'string') {
              this.info = 'Billet Validé !';
            } else {
              this.errors = compostage;
            }
          }
        );
        this.errors = '';
        this.info = '';

      },
      (err) => {
        // Si il y a une erreur, c'est que le ticket n'est pas reconnu
        this.errors = 'Ticket non reconnu !';
        this.billet = null;
      }
    );

    this.id = '';
  }


}
