import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  title: string = 'Charactersss List';

  @Output()
  deleteCharacterListComp: EventEmitter<string> = new EventEmitter();

  @Input('CharacterList')
  heroes: Character[] = [
    { name: 'Krico', power: 500 },
    { name: 'Donas', power: 10500 }
  ];

  deleteElem(id?: string): void {
    if (!id) return;
    this.deleteCharacterListComp.emit(id);
  }

}
