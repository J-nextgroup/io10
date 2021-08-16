import { Component, OnInit } from '@angular/core';
import { Spreker, Talk } from './sprekers-models';
// import * as sprekers from 'src/assets/sprekers-data.json';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-sprekers',
  templateUrl: './sprekers.component.html',
  styleUrls: ['./sprekers.component.scss']
})
export class SprekersComponent implements OnInit {
  //  spr: Spreker[];
  // sprekers$: Observable<Spreker[]>;
  sprekers = sprekers;
  talks = talks;

   unknownspreker: Spreker = {
    id:-1,
    naam: 'onbekend spreker',
    afbeelding: '#',
    company: 'knowwhere'
  }

  constructor( ) {
    // this.spr = sprekers;
   }

  ngOnInit(): void {
    console.log("sprekers");
    console.log(sprekers);
    console.log(sprekers);
    // this.sprekers = sprekers;
  }

  // zoiets in gedachte maar duurde te lang dus hierbij geparkeerd
  // getSpreker(naam:string): Spreker{
  //   let gevondenspreker: Spreker;
  //   sprekers.forEach( (spreker) => {
  //     if( spreker.naam===naam){
  //       gevondenspreker = spreker;
  //     }
  //   })
  //   gevondenspreker = this.unknownspreker;
  //   return gevondenspreker;
  // }

}

// splitsen te moeilijk voor nu? dan samenvoegen. werk model ook bij
  // sprekers: Spreker[]
  const sprekers:Spreker[] = [
    {
      "id": 0,
      "naam": "Gerald Hemmers1",
      "afbeelding": "spreker1_medium.png",//eigenlijk moet de formaat in de styling bepaald worden maar voor nu meegeven TODO
      "company": "ICTU",
    },
    {
      "id": 1,
      "naam": "Gerald Hemmers2",
      "afbeelding": "spreker2_medium.png",
      "company": "ABN Amro",
    },
    {
      "id": 2,
      "naam": "Gerald Hemmers3",
      "afbeelding": "spreker1_medium.png",
      "company": "ICTU",
    },
    {
      "id": 3,
      "naam": "Gerald Hemmers4",
      "afbeelding": "spreker2_medium.png",
      "company": "Meldkamer",
    },
    {
      "id": 4,
      "naam": "Gerald Hemmers4",
      "afbeelding": "spreker1_medium.png",
      "company": "ICTU",
    }
  ]

  const talks:Talk[] = [{
    "id": 0,
    "afbeelding": 'talk1.jpeg',
    "titel": '',
    "inhoudelijk_tekst": '',
    "spreker": sprekers[0],
  },{
    "id": 0,
    "afbeelding": 'talk2.jpeg',
    "titel": '',
    "inhoudelijk_tekst": '',
    "spreker": sprekers[1],
  },{
    "id": 0,
    "afbeelding": 'talk3.jpeg',
    "titel": '',
    "inhoudelijk_tekst": '',
    "spreker": sprekers[2],
  },{
    "id": 0,
    "afbeelding": 'talk1.jpeg',
    "titel": '',
    "inhoudelijk_tekst": '',
    "spreker": sprekers[3],
  },{
    "id": 0,
    "afbeelding": 'talk2.jpeg',
    "titel": '',
    "inhoudelijk_tekst": '',
    "spreker": sprekers[4],
  },
  ]


