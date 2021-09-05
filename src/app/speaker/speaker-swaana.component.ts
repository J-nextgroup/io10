import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speaker-swaana',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerSwaanaComponent {
  picture = 'assets/speaker-bg3.jfif'
  portrait = 'assets/swaana.png'
  title = 'Swaana Snorradottir'
  subject = 'The backend in the frontend'
  location = 'Rio'
  time = '15:00 - 16:00'
  description =
    'Door lagen aan elke applicatie toe te voegen, wordt deze modulair en schaalbaar. Maar wat gebeurt er als we backend-praktijken toevoegen aan de frontend?'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
