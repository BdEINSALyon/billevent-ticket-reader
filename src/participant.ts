export class Participant {
  constructor(participant: Participant) {
    this.id = participant.id;
    this.first_name = participant.first_name;
    this.last_name = participant.last_name;
  }

  id: number;
  first_name: string;
  last_name: string;

  toString(): string {
    return this.id + ': ' + this.last_name;
  }
}
