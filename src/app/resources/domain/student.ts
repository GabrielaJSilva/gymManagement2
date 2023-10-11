import { Contacts } from './contacts';
import { Measurement } from './Measurement';

export class Student{

  name?: String;
  sexoEnum?: number;
  contacts?: Array<Contacts>;
  measurements?: Array<Measurement>;
  birthDate?: String;
  status?: boolean;
  paymentStatus?: number;
}
