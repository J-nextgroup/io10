import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speaker-roel',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerRoelComponent {
  picture = 'assets/speaker-bg5.jfif'
  portrait = 'assets/jasperroel.png'
  title = 'Jasper Roel'
  subject =
    'Devops: Becoming the most valuable player (automation as a lifestyle)'
  location = 'Atlanta'
  time = '16:45 - 17:45'
  description =
    '“Production ready” betekent niet alleen maar “de code is af”. Als programmeur is de code nog maar een deel van je werk. Automatische deploys, monitoring & alerting rules en inzicht in wat er in je applicatie gebeurt zijn minstens zo belangrijk. In deze sessie kijken we samen naar wat er allemaal nog meer komt kijken om je applicatie niet alleen werkend, maar ook succesvol te maken. Via handige (maar weinig bekende) tools, tips & tricks om je te helpen zorg je ervoor dat jouw applicatie er met kop en schouders boven uit steekt.'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
