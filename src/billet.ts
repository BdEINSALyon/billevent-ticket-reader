import {Participant} from './participant';

export class Billet {
  id: number;
  order: number;
  participants:  Array<Participant>;

  constructor(billet) {
    this.id = billet.id;
    this.order = billet.order;
    this.participants = [];
    for (const p of billet.participants)
    {
      this.participants.push(new Participant(p));
    }
  }

}
