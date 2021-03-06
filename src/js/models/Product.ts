type Currency = 'USD' | 'MXN';

export interface IProduct {
  _id: string;
  name: string;
  cover: string;
  author: string;
  artBy: string;
  price: number;
  currency: Currency;
}

export const dataStore: IProduct[] = [
  {
    _id: 'batman-three-jokers-3',
    name: 'BATMAN: THREE JOKERS #3',
    cover: 'batman-three-jokers-3',
    price: 6.99,
    author: 'Geoff Johns',
    artBy: 'Jason Fabok',
    currency: 'USD',
  },
  {
    _id: 'the-flash-764',
    name: 'THE FLASH #764',
    cover: 'the-flash-764',
    price: 3.99,
    author: 'Kevin Shinick',
    artBy: 'Will Conrad',
    currency: 'USD',
  },
  {
    _id: 'batman-beyond-48',
    name: 'BATMAN BEYOND #48',
    cover: 'batman-beyond-48',
    price: 3.99,
    author: 'Dan Jurgens',
    artBy: 'Paul Pelletier',
    currency: 'USD',
  },
  {
    _id: 'batmansuperman-13',
    name: 'BATMAN/SUPERMAN #13',
    cover: 'batmansuperman-13',
    price: 3.99,
    author: 'Joshua Williamson',
    artBy: 'Max Raynor',
    currency: 'USD',
  },
  {
    _id: 'red-hood-outlaw-50',
    name: 'RED HOOD: OUTLAW #50',
    cover: 'red-hood-outlaw-50',
    price: 5.99,
    author: 'Scott Lobdell',
    artBy: 'Paolo Pantalena',
    currency: 'USD',
  },
  {
    _id: 'suicide-squad-10',
    name: 'SUICIDE SQUAD #10',
    cover: 'suicide-squad-10',
    price: 3.99,
    author: 'Bruno Redondo',
    artBy: 'Tom Taylor',
    currency: 'USD',
  },
  {
    _id: 'batgirl-50',
    name: 'BATGIRL #50',
    cover: 'batgirl-50',
    price: 5.99,
    author: 'Cecil Castellucci',
    artBy: 'Aneke, Marguerite Sauvage, Emanuela Lupacchino',
    currency: 'USD',
  },
  {
    _id: 'action-comics-1026',
    name: 'ACTION COMICS #1026',
    cover: 'action-comics-1026',
    author: 'Brian Michael Bendis',
    artBy: 'Max Raynor',
    price: 3.99,
    currency: 'USD',
  },
];
