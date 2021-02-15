import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = [
  {
    id: 1,
    name: "Superman",
    superPower: "flying",
    address: "New Your"
  },
  {
    id: 2,
    name: "Spiderman",
    superPower: "climbing",
    address: "Washington"
  },
  {
    id: 3,
    name: "DarkFater",
    superPower: "kardvívás",
    address: "Space",
  },
  {
    id: 4,
    name: "Octopus",
    superPower: "bellowing",
    address: "Under the sea"
  },
  {
    id: 5,
    name: "White shale",
    superPower: "biging",
    address: "Mars"
  }]


  constructor() { }
}


