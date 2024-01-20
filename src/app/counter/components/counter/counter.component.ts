import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h2>Counter: {{counter}}</h2>
<button (click)="increaseBy(1)" class="me-4">+1</button>
<button (click)="resetCounter()" class="me-4">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
<hr>
 `
})
export class CounterComponent{

  public counter:number=12;

  increaseBy(value:number):void{
    this.counter+=value;
  }

  resetCounter(){
    this.counter = 12;
  }
}
