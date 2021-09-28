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
    'Frontend web-applicaties kunnen steeds meer complexiteit aan dankzij de moderne frontend frameworks en de steeds krachtigere hardware waarop de browsers draaien. Maar waar ligt eigenlijk de grens tussen frontend en backend? In dit praatje bespreken we de mogelijkheid om de backend door te trekken naar de frontend en wat dat kan betekenen voor de samenwerking tussen deze twee disciplines.'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
