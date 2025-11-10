export class User {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  adressee: {
    street: string;
    city: string;
    state: string;
    zip: string;
  } = {
    street: '',
    city: '',
    state: '',
    zip: ''
  };
  phones: string[] = [];
}
