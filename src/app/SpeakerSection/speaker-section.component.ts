import { Speaker, speakers } from '../data'
import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speakers',
  templateUrl: './speaker-section.component.html',
  styleUrls: ['./speaker-section.component.scss'],
})
export class SpeakerSection {
  speakers = speakers

  currentSpeaker: Speaker | null = null
  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>, speaker: Speaker) {
    this.currentSpeaker = speaker
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
