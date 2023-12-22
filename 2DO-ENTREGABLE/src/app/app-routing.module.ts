import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersListComponent } from './providers/components/providers-list/providers-list.component';
import { HomeComponent } from './dashboard/components/home/home.component';
import { ProvidersAddComponent } from './providers/components/providers-add/providers-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'providers', 
    children: [
      { path: 'add', component: ProvidersAddComponent },
      { path: 'list', component: ProvidersListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
