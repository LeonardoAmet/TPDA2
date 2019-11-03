import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LogRiegosPage } from './log-riegos.page';
import { DirectivaColorDirective } from '../directivas/directiva-color.directive';
//import { PipeFechaPipe } from '../pipes/pipe-fecha.pipe';


const routes: Routes = [
  {
    path: '',
    component: LogRiegosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogRiegosPage]
})
export class LogRiegosPageModule {}
