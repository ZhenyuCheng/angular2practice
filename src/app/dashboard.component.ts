/**
 * @file
 * @author: Cheng.Zhenyu
 * @Date: 2017-06-13 14:56:15
 * @Last Modified by: Cheng.Zhenyu
 * @Last Modified time: 2017-06-13 16:36:00
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'template/dashboard.component.html',
    styleUrls: ['css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService) { }

    ngOnInit(): void { 
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}