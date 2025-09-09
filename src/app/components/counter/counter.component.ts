import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  counter: number = 0;


  increasCounter = ()=>{
    this.counter +=1;

  }

  decreasCounter = ()=>{
    this.counter -=1;

  }

}
