/**
 * @file
 * @author: Cheng.Zhenyu
 * @Date: 2017-06-13 14:56:34
 * @Last Modified by: Cheng.Zhenyu
 * @Last Modified time: 2017-06-13 16:34:16
 */

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'template/heroes.component.html',
    styleUrls: ['css/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    constructor(
        private heroService: HeroService,
        private router: Router
        ) { }
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    gotoDetail() : void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
