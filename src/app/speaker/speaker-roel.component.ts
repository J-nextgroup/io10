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
    'Devops: Becoming the most valuable player automation as a lifestyle'
  location = 'Atlanta'
  time = '16:45 - 17:45'
  description =
    'Wil je alle ins en outs van het werken met moderne devops? Deze sessie geeft je al de tips en tricks.'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
