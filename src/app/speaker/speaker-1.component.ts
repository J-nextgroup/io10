import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speaker-1',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class Speaker1Component {
  picture = '/assets/speaker-bg.jfif'
  portrait = '/assets/gerald.jpg'
  title = 'Gerald Hemmers - ICTU'
  subject = 'Lead UX Designer over gebruikerstesten'
  location = 'Vancouver'
  time = '15:00 - 16:00'
  description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
