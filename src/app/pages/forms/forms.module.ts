import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormsPage } from './forms.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: FormsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [FormsPage]
})
export class FormsPageModule {}
