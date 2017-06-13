/**
 * @file
 * @author: Cheng.Zhenyu
 * @Date: 2017-06-13 14:56:21
 * @Last Modified by: Cheng.Zhenyu
 * @Last Modified time: 2017-06-13 16:06:54
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "./hero.service";
import { DashboardComponent } from "./dashboard.component";

import { AppRoutingModule } from "./app-routing.moule";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [
        AppComponent
    ]
})


export class AppModule { }
