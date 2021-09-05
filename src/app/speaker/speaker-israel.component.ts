import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speaker-israel',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerIsraelComponent {
  picture = 'assets/speaker-bg6.jfif'
  portrait = 'assets/israel.png'
  title = 'Israel Roldan Leon – Front-end Specialist'
  subject = 'Demystifying the Modern Front-end Stack'
  location = 'Peking'
  time = '18:00 - 18:30'
  description =
    'In this talk, I will provide an overview of the current state of Front-end development tools, how we got here and what this means for integration teams looking to pay closer attention to the increasing influence of Front-end development in Software Development teams.'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
