import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { NewComponent } from './new/new.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [

  {path:'abc1',component:NewComponent},
  {path:'xyz' ,component:TestComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
