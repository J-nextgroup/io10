import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speaker-swaana',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerSwaanaComponent {
  picture = 'assets/speaker-bg3.jfif'
  portrait = 'assets/swaana.jpg'
  title = 'Swaana Snorradottir'
  subject = 'The backend in the frontend'
  location = 'Peking'
  time = '16:45 - 17:45'
  description =
    'Adding layers to any application makes it modular and scalable. But what happens when we add backend practices to the frontend?'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
