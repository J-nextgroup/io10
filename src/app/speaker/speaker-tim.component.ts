import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speaker-tim',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerTimComponent {
  picture = 'assets/speaker-bg8.jfif'
  portrait = 'assets/tim.png'
  title = 'Tim de Roode'
  subject =
    'Product Management in de praktijk: Design Thinking + Scrum + DevOps'
  location = 'Vancouver'
  time = '18:15 - 19:15'
  description =
    'Tim de Roode is een freelance Product Owner met ruime ervaring in het valideren en vertalen van klantbehoeftes en het structuren en optimaliseren van interne business- en IT-processen. De laatste jaren zijn werkvormen zoals Design Thinking, Scrum en DevOps enorm in populariteit gestegen. In deze sessie zullen we in gaan op de vraag hoe deze werkvormen zich tot elkaar verhouden en vooral hoe zij elkaar in de praktijk kunnen versterken.'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
