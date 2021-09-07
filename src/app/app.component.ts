import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  signup = {
    name: '',
    email: '',
    linkedin: '',
  }

  onSubmit() {
    window.open(
      `mailto:office@io10.nl?subject=${encodeURIComponent(
        'Aanmelding voor IO/10 event'
      )}&body=${encodeURIComponent(
        `Naam: ${this.signup.name}\nE-mail:${this.signup.email}\nLinkedIn:${this.signup.linkedin}`
      )}`
    )
  }

  scroll(event: MouseEvent, selector: string) {
    event.preventDefault()
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }
}
