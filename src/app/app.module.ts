import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeExampleComponent } from './three-example/three-example.component';
import { ThreeExample2Component } from './three-example2/three-example2.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeExampleComponent,
    ThreeExample2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
