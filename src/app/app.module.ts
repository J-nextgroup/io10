import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HeaderComponent } from './header.component'
import { PiccalillyComponent } from './piccalilly/piccalilly.component'

@NgModule({
  declarations: [AppComponent, PiccalillyComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
