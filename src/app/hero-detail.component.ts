/**
 * @file
 * @author: Cheng.Zhenyu
 * @Date: 2017-06-13 15:30:18
 * @Last Modified by: Cheng.Zhenyu
 * @Last Modified time: 2017-06-13 16:38:11
 */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from './hero';
import { HeroService } from "./hero.service";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: '/template/hero-detail.component.html',
    styleUrls: ['css/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
}