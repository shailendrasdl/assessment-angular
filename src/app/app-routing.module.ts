import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberhshipsComponent } from './memberhships/memberhships.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: '',
    component: MemberhshipsComponent,
  },
  {
    path: 'membership_detail/:membership_id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
