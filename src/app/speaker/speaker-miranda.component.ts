import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speaker-miranda',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerMirandaComponent {
  picture = 'assets/speaker-bg4.jfif'
  portrait = 'assets/miranda.png'
  title = 'Miranda Beugelsdijk / Mirthe van Gaalen - Conversational Design'
  subject = 'We laten jullie zien hoe wij mens en techniek samenbrengen'
  location = 'Rio'
  time = '15:00 - 16:00'
  description =
    'Heb jij je altijd al afgevraagd waarom een chatbot je niet begrijpt? In deze interactieve sessie nemen wij je mee in de wereld van de virtuele assistent. We laten jullie zien hoe wij mens en techniek samenbrengen om te zorgen dat de bot jou wel begrijpt. Na deze sessie ken jij de beginselen van conversation design.'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
