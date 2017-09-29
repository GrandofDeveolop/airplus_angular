import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) { }
  @Input() hero: Hero;
  ngOnInit(): void {
    // this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    //   .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}
