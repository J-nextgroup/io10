import { Navbar } from './Navbar/navbar.component'
import { TimeTableSection } from './TimeTableSection/timetable-section.component'
import { SpeakerSection } from './SpeakerSection/speaker-section.component'
import { LogoSection } from './LogoSection/logo-section.component'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

// import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    SpeakerSection,
    LogoSection,
    TimeTableSection,
    Navbar,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
