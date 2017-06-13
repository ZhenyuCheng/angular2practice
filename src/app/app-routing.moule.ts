/**
 * @file
 * @author: Cheng.Zhenyu
 * @Date: 2017-06-13 15:59:13
 * @Last Modified by: Cheng.Zhenyu
 * @Last Modified time: 2017-06-13 16:02:53
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from "./hero-detail.component";



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule],
})
export class AppRoutingModule { }
