import { Injectable } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  constructor() { }

  public personajes: Character[] = [{
    id: uuid(),
    name: 'Batman',
    power: 150
  },
  {
    id: uuid(),
    name: 'SuperMan',
    power: 750
  },
  {
    id: uuid(),
    name: 'IronMan',
    power: 900
  },
  {
    id: uuid(),
    name: 'Hulk',
    power: 100
  },
  ];

  addCharacter(character: Character): void {
    const characterNew:Character = { id: uuid(), ...character };
    this.personajes.push(characterNew);
  }
  // elemToDelete(i: number): void {
  //   this.personajes.splice(i, 1);
  // }

  deleteCharacterById(id: string): void {
    this.personajes = this.personajes.filter(character => character.id !== id);
  }
}
