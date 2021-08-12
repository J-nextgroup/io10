import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimetableComponent implements OnInit {
  timetable_header: string[] = ['Rio', 'Vancouver', 'Peking', 'Atlanta']

  constructor() {}

  ngOnInit(): void {}
}
