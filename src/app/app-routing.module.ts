import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'crisis-list', component: CrisisListComponent },
  { path: '', redirectTo: '/crisis-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
