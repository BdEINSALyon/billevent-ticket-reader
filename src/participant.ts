export class Participant{
  id: number;
  first_name: string;
  last_name: string;

  toString(): string{
    return this.id + ": " + this.last_name;
  }
}
