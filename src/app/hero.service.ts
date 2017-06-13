/**
 * @file
 * @author: Cheng.Zhenyu
 * @Date: 2017-06-13 14:56:29
 * @Last Modified by: Cheng.Zhenyu
 * @Last Modified time: 2017-06-13 16:27:30
 */
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}
