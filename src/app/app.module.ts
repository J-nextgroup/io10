import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SpeakerDennisComponent } from './speaker/speaker-dennis.component'
import { SpeakerDennis2Component } from './speaker/speaker-dennis2.component'
import { SpeakerMirandaComponent } from './speaker/speaker-miranda.component'
import { SpeakerIsraelComponent } from './speaker/speaker-israel.component'
import { SpeakerJochemComponent } from './speaker/speaker-jochem.component'
import { SpeakerRoelComponent } from './speaker/speaker-roel.component'
import { SpeakerTimComponent } from './speaker/speaker-tim.component'
import { SpeakerSwaanaComponent } from './speaker/speaker-swaana.component'

@NgModule({
  declarations: [
    AppComponent,
    SpeakerDennisComponent,
    SpeakerDennis2Component,
    SpeakerMirandaComponent,
    SpeakerRoelComponent,
    SpeakerIsraelComponent,
    SpeakerJochemComponent,
    SpeakerTimComponent,
    SpeakerSwaanaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
