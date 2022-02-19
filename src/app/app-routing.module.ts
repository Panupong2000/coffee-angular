import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import {GreetComponent} from './component/greet/greet.component'
import {MyFormComponent} from './component/my-form/my-form.component'
import {DirectivesComponent} from './component/directives/directives.component'
import { FriendComponent } from './component/friend/friend.component';
import { CoffeeComponent } from './component/coffee/coffee.component';

const routes : Routes=[
  {path:'Greet', component:GreetComponent},
  {path:'MyForm', component:MyFormComponent},
  {path:'Directive', component:DirectivesComponent},
  {path:'Friend', component:FriendComponent},
  {path:'Coffee', component:CoffeeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
