import { logos } from '../data'
import { Component } from '@angular/core'

@Component({
  selector: 'app-logos',
  templateUrl: './logo-section.component.html',
  styleUrls: ['./logo-section.component.scss'],
})
export class LogoSection {
  logos = logos
}
