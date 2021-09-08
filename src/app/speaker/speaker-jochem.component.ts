import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speaker-jochem',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerJochemComponent {
  picture = 'assets/speaker-bg7.jfif'
  portrait = 'assets/jasper.png'
  title = 'Jasper Jochem'
  subject = 'VR/AR: de toekomst van mens machine interactie'
  location = 'Atlanta'
  time = '18:15 - 19:15'
  description =
    'Jasper Jochem heeft een passie voor de toepassing van technologie. Hij werkt dagelijks aan innovatieve oplossingen, leuker nog is dat hij hier – met een aanstekelijk enthousiasme – alles over weet te vertellen. Bereid je voor op een reis waarin technologieën zoals artificial intelligence, augmented reality en virtual reality worden toegepast bij Defensie.'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
