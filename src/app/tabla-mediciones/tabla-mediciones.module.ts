import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TablaMedicionesPage } from './tabla-mediciones.page';

const routes: Routes = [
  {
    path: '',
    component: TablaMedicionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablaMedicionesPage]
})
export class TablaMedicionesPageModule {}
