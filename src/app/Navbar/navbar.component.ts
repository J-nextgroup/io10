import { navbarItems } from '../data'
import { Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class Navbar {
  navbarItems = navbarItems
  scroll(event: MouseEvent, selector: string) {
    event.preventDefault()
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }
}
