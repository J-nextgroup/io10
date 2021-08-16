import { Component, Input, OnInit } from '@angular/core';
import { Spreker, Talk } from '../sprekers-models';

@Component({
  selector: 'app-spreker',
  templateUrl: './spreker.component.html',
  styleUrls: ['./spreker.component.scss']
})
export class SprekerComponent implements OnInit {
  @Input() talk!: Talk;

  constructor() {}

  ngOnInit(): void {}

}
