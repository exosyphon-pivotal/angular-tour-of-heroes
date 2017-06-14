import { Component, OnInit } from "@angular/core";
import { Hero } from "app/hero";
import { HeroService } from "app/hero.service";
import { Router } from "@angular/router";

@Component({
  selector: 'my-heroes',
  styleUrls: [ './heroes.component.css' ],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => { this.heroes = heroes; });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
