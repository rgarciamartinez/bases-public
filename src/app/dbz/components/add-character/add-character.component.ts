import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public agregarCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'Ruben',
    power: 0
  };

  addCharacter(): void {
    if (this.character.name.trim().length === 0) return;
    this.agregarCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }

}

