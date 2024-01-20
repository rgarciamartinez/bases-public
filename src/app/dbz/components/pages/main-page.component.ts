import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  constructor(private characterService: CharacterService) {  }

  get charactersMainPage(): Character[] {
    return this.characterService.personajes;
  }

  deleteCharacterMainPage(id: string): void {
    this.characterService.deleteCharacterById(id);
  }

  addCharacterMainPage(character: Character): void {
    this.characterService.addCharacter(character);
  }
}
