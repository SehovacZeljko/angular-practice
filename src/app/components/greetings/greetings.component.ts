import { Component, signal, input} from '@angular/core';

@Component({
  selector: 'app-greetings',
  imports: [],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.scss'
})
export class GreetingsComponent {
 message = input<string>('');

 typedText: string = '';
 lastname: string ='';

  onInputChange(event: Event, field: 'typedText' | 'lastname') {
    const input = event.target as HTMLInputElement;
    this[field] = input.value;
    console.log(`${field} is now:`, input.value);
  }

  onEnter() {
    alert(`Full name: ${this.typedText} ${this.lastname}`);
  }


    onClick() {
    console.log('Button was clicked!');
    //alert('Button clicked!');
  }
}
