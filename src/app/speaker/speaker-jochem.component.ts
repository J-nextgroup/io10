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
  title = 'Jasper Jochem – Hoofd RCC: RPA & IA bij Defensie'
  subject = 'VR/AR: de toekomst van mens machine interactie'
  location = 'Atlanta'
  time = '18:00 - 18:30'
  description = '???'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
