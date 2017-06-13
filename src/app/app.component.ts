/**
 * @file
 * @author: Cheng.Zhenyu
 * @Date: 2017-06-13 14:56:09
 * @Last Modified by: Cheng.Zhenyu
 * @Last Modified time: 2017-06-13 16:41:04
 */

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        `,
    styleUrls: ['css/app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
 }
