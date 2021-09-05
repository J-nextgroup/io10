import { Component, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-speaker-dennis',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerDennisComponent {
  picture = 'assets/speaker-bg3.jfif'
  portrait = 'assets/dennis.png'
  title = 'Dennis van der Stelt - Software Architect'
  subject = 'Hoe om te gaan met eventual consistency'
  location = 'Rio'
  time = '16:45 - 17:15'
  description =
    'Als developer en software architect willen we dat onze systemen performant en onderhoudbaar zijn. Veel van deze beslissingen zorgen voor eventual consistency, hoewel gebruikers onmiddellijke consistentie willen. Ze willen niet wachten op ‘eventual’ en hebben liever direct feedback van hun acties op het systeem. In deze sessie kijken we naar manieren, zowel in de gebruikersinterface als in de back-end, om direct feedback te geven aan eindgebruikers, ook al is de back-end nog niet volledig bijgewerkt, waardoor we ons systeem nog steedsbetrouwbaar en performant kunnen laten draaien.'

  constructor(private modal: NgbModal) {}

  openModal(templateRef: TemplateRef<any>) {
    this.modal.open(templateRef, { backdrop: true, size: 'lg', centered: true })
  }
}
