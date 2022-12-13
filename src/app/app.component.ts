import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name = 'Laura';
  age = 20;
  img = 'https://source.unsplash.com/random';
  btnDisable = true;
  person = {
    name : 'Edwin',
    age : 23,
    avatar :  'https://source.unsplash.com/random'
  }

  // names: (string | number)[] = [12, 'Laura', 'Ximena']
  names: string [] = [];
  emojis = [ '😂' , '🐦', '🐳','🌮', '💚']
  newName = '';

  toggleButton(){
    this.btnDisable = !this.btnDisable;
  }

  increadeAge(){
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event : Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
  }
}
