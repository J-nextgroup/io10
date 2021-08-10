import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed = true
  menuitems: { url: string; text: string }[] = [
    {
      url: '/#themes',
      text: 'io/10',
    },
    {
      url: '/#themes',
      text: "thema's/sprekers",
    },
    {
      url: '/#timetable',
      text: 'timetable',
    },
    {
      url: '/#catering',
      text: 'catering',
    },
    {
      url: '/#parking',
      text: 'parkeren',
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed
  }

  selectMenu() {
    this.collapsed = true
  }
}
