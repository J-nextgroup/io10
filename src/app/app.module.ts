import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SprekersComponent } from './sprekers/sprekers.component';
import { SprekerComponent } from './sprekers/spreker/spreker.component';

@NgModule({
  declarations: [
    AppComponent,
    SprekersComponent,
    SprekerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
