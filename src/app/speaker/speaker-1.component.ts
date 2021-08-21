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

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
