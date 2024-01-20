import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Peter Parker';
  public age: number = 27;

  /**
   * Returns the capitalized version of the name.
   * @returns The capitalized name.
   */
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  /**
   * Returns the description of the hero.
   * The description includes the hero's name and age.
   * @returns The hero's description.
   */
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    if (this.name === 'Tony Stark') {
      this.name = 'Peter Parker';
    } else {
      this.name = 'Tony Stark';
    }
  }

  changeAge(){
    if (this.age === 27) {
      this.age = 47;
    } else {
      this.age = 47;
    }
  }

  resetForm(){
    this.name = 'Peter Parker';
    this.age = 27;
  }
}
