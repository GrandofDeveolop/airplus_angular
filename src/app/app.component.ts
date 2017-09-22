import { Component } from '@angular/core';
export class Hero {

  id: number;
  name: string;
}
const HEROES: Hero[] = [
  { id: 11 , name: 'Mr M'},
  { id: 12 , name: 'Jack '}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'title of hereos';
  heroes = HEROES;
  selectHero: Hero;
  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }
}
