import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  scroll(event: MouseEvent, selector: string) {
    event.preventDefault()
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }
}
