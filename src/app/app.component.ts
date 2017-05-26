import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}
const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
]
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heros">
    <li *ngFor = "let hero of heroes">

    <h2>{{hero.name}} details!</h2>
    <div><label>id:</label>{{hero.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
    </div>
        </li>
    </ul>
    `,
})
export class AppComponent {
    name = 'Angular';
    title = 'Tour of Heros';
    hero: Hero = {
        id: 1,
        name: 'windstorm'
    };
    heroes = HEROES;
}
