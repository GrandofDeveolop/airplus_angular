import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService} from './hero.service';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11 , name: 'Mr M'},
  { id: 12 , name: 'Jack '}
];

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit{
  title = 'title of hereos';
  heroes = HEROES;
  selectHero: Hero;
  constructor(private heroService: HeroService) { }
  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
