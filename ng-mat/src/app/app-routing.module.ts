import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponent } from './shared/shared.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { OnboardComponent } from './sections/onboard/onboard.component';

const routes: Routes = [
  { path: 'onboard', component: OnboardComponent },
  { path: '', redirectTo: '/onboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
