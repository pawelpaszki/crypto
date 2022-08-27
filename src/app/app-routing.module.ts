import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PawelComponent } from './pawel/pawel.component';

const routes: Routes = [
  { path: '', redirectTo: '/wen_mun', pathMatch: 'full' },
  { path: 'wen_mun', component: PawelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }