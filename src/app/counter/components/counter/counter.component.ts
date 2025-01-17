import {Component} from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `<h3>Counter : {{counter}}</h3>

  <button (click)="increaseBY(1)">+1</button>
  <button (click)="resetCouter()">Reset</button>
  <button (click)="increaseBY(-1)" >-1</button>
  `
})
export class CounterComponent {
  public counter :number = 10;

  increaseBY(value:number):void{
    this.counter = this.counter + value;
  }
  resetCouter():void{
    this.counter = 10;
  }

}
