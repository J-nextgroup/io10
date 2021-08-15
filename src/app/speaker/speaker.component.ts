import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent implements OnInit {
  @Input() picture?: string
  @Input() portrait?: string
  @Input() title?: string
  @Input() subject?: string

  constructor() {}

  ngOnInit(): void {}
}
