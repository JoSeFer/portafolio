import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import {
    AboutComponent,
    PortafolioComponent,
    PortafolioItemComponent
} from './components/index.paginas';

const app_routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portafolioItem', component: PortafolioItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
