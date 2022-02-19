import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFormComponent } from './component/my-form/my-form.component';
import { DirectivesComponent } from './component/directives/directives.component';
import { GreetComponent } from './component/greet/greet.component';
import { AppRoutingModule } from './app-routing.module';
import { FriendComponent } from './component/friend/friend.component';
import { CoffeeComponent } from './component/coffee/coffee.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DirectivesComponent,
    GreetComponent,
    FriendComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
