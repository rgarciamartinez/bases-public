import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spider Man', 'Iron Man', 'Hulk', 'Thor'];
  public heroeBorrado?:string;

  constructor(){
  }

  borrarHero() {
    this.heroeBorrado = this.heroNames.pop();
  }

  reset(){
    this.heroNames = ['Spider Man', 'Iron Man', 'Hulk', 'Thor'];
    this.heroeBorrado = undefined;
  }

}
