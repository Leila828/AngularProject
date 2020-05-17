import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:import-spacing
import { Page1Component} from  './page1/page1.component';
// tslint:disable-next-line:import-spacing
import { Page2Component} from  './page2/page2.component';

const routes: Routes = [
  {path: '', redirectTo: '/page1', pathMatch: 'prefix'},
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
 // {path:"page1/:id", component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
