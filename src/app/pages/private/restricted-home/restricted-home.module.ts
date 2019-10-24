import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestrictedHomePage } from './restricted-home.page';

const routes: Routes = [
  {
    path: '',
    component: RestrictedHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RestrictedHomePage]
})
export class RestrictedHomePageModule {}
