import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  { path: 'shared', component: SharedComponent },
  { path: '', redirectTo: '/shared', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
