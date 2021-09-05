import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speaker-dennis2',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerDennis2Component {
  picture = 'assets/speaker-bg3.jfif'
  portrait = 'assets/dennis.png'
  title = 'Dennis van de Stelt - Software Architect'
  subject = 'Microservices delen nooit data!'
  location = 'Rio'
  time = '15:00 - 16:00'
  description =
    "In deze sessie bespreken we waarom technologie niet helpt bij het oplossen van 'high coupling' in je systeem. We kijken op een andere manier naar microservices, een waarbij ze echt autonoom opereren en nooit data hoeven te delen."

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
