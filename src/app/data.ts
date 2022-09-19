export interface Speaker {
  picture: string
  portrait: string[]
  isDefaultPicture: Boolean
  isDefaultBanner: Boolean
  title: string
  subject: string
  location: string
  time: string
  description: string
  remarks?: string
}

export interface LogoSection {
  href: string
  image_src: string
  target: string
}

export interface NavbarItem {
  href: string
  scroll_to: string
  text: string
}

export const speakers: Speaker[] = [
  {
    picture: 'assets/logo.png',
    portrait: ['assets/michael.jpg', 'assets/erwin.JPG'],
    isDefaultPicture: false,
    isDefaultBanner: true,
    title: 'Michael Schifferling / Erwin Bell',
    subject: 'Game development for Gamers and non Gamers alike.',
    location: 'Vancouver',
    time: '',
    description: `Game development is not new but constantly changing. Now maybe faster than ever, and more importantly, more accesible for more people than ever. In this session we will take you on a brief journey into the possibilities of game development in 2022 and beyond. Subjects covered are: Game Industry in numbers, opportunities and trends in gamification, serious gaming and games as learning, insights in new game technology and game design. We conclude the session with some beginner friendly pointers if you want to venture into game development for yourself.`,
  },
  {
    picture: 'assets/logo.png',
    portrait: ['assets/julia_alberga.png'],
    isDefaultPicture: false,
    isDefaultBanner: true,
    title: 'Julia Alberga',
    subject: 'Design Democracy',
    location: 'Vancouver',
    time: '',
    description:
      'Julia Alberga is expert in Design Thinking-technieken en haar focus ligt op klantbeleving. Als UX-consultant en onderzoeker helpt zij bedrijven om onderzoek te doen naar de behoeftes van de gebruiker en de doorvertaling hiervan naar verbeterde diensten en producten. Dit doet zij door de gebruiker actief mee te laten ontwerpen in het design proces met behulp van co-creatie tools. Julia’s technische achtergrond zorgt er bovendien voor dat zij het ontwerpproces beheerst en de verbeteringen kan overbrengen aan developers en ontwerpers. Door bedrijven te helpen met het integreren van deze technieken in hun dagelijkse werkzaamheden, hoopt ze dat de Design Thinking denkwijze zich als een olievlek verspreid en iedereen als motto heeft om de gebruiker centraal te stellen.',
  },
  {
    picture: 'assets/logo.png',
    portrait: ['assets/swaana.jpg'],
    isDefaultPicture: false,
    isDefaultBanner: true,
    title: 'Swaana Snorradottir',
    subject: 'The full-stack of Jamstack',
    location: 'Peking',
    time: '',
    description:
      'Modern day websites need to be fast, secure and scalable. In this talk we will look at how Jamstack can contribute to these demands with core concepts such as pre-rendering, static site generators and api decoupling.',
  },
  {
    picture: 'assets/logo.png',
    portrait: ['assets/bjorn.jpeg'],
    isDefaultPicture: false,
    isDefaultBanner: true,
    title: 'Bjorn van der Beek',
    subject: 'Implementing clean architecture',
    location: 'Peking',
    time: '',
    description: `We werken steeds vaker met (micro) services. Je ziet vaak dat bedrijven zelf een blauwprint hebben hoe deze services eruit moeten zien. Helaas zie ik steeds ik weer op projecten dat business logica afhankelijk is geworden van allerlei technologie en infrastructuur. Vaak gaat het al mis in de blauwprint.
    In dit verhaal neem ik je mee wat clean architecture is, hoe je het in praktisch elk applicatie landschap toe kunt en wilt toepassen en hoe het ervoor zorgt dat software onderhoudbaarder is en blijft gedurende de application lifecycle.`,
  },
  {
    picture: 'assets/logo.png',
    portrait: ['assets/martin.png'],
    isDefaultPicture: false,
    isDefaultBanner: true,
    title: 'Martin C. de Munnik',
    subject: 'Neuromarketing',
    location: 'Rio',
    time: '',
    description: `Op een vermakelijke wijze deelt De Munnik de inzichten die hij met zijn bedrijf
    Neurensics heeft opgedaan gedurende vele honderden studies voor klanten over de hele
    wereld.. We krijgen een spectaculair kijkje in de werking van ons brein, als het gaat om het
    verbeteren van het effect van marketing. De Munnik laat zien hoe merken werken en
    geeft ons tips en trucs, do’s en don’ts. Zodat jij je werk morgen beter kan doen dan
    gisteren.`,
  },
  {
    picture: 'assets/logo.png',
    portrait: ['assets/saskia.jpg'],
    isDefaultPicture: false,
    isDefaultBanner: true,
    title: 'Saskia Groenewegen',
    subject:
      'More than a Game: the Future of Education and Work in the Metaverse',
    location: 'Rio',
    time: '',
    description: `The Metaverse is often seen as the future of social media and gaming. But it can be so much more! Get inspired by the possibilies of immersive learning and how XR technologies like virtual, augmented and mixed reality can help people work faster, safer and with more fun. See how farmers use AR glasses to navigate animal data, how mechanics work together remotely to do repairs on complex systems, and how future nurses train in virtual reality to prepare for work in a warzone. This talk will give you an overview over the possibilities and the benefits of XR technologies in many different work and training situations, and a look at the underlying hard- and software.`,
  },
  {
    picture: 'assets/logo.png',
    portrait: ['assets/richard.png'],
    isDefaultPicture: false,
    isDefaultBanner: true,
    title: 'Richard van Hooijdonk',
    subject: 'Keynote spreker',
    location: 'Rio',
    time: '',
    description:
      'Als bevlogen keynotespreker laat Richard van Hooijdonk de bezoekers van zijn inspiratiesessies een toekomst zien die we nog nauwelijks kunnen bevatten. Hij maakt daarbij een vertaalslag van wetenschappelijke doorbraken en technologische ontwikkelingen naar de impact daarvan op ons dagelijks leven, onze organisaties en onze overheden.',
  },
  {
    picture: 'assets/logo.png',
    portrait: ['assets/leone.png'],
    isDefaultPicture: false,
    isDefaultBanner: true,
    remarks: 'Requires an AWS account ready to be used, which can be created for free.',
    title: 'Leone Lage Perdigão',
    subject: 'Serverless 101 - Getting started with AWS Lambda & Serverless Applications',
    location: 'workshop',
    time: '',
    description: 'In this workshop, we take a high-level overview of AWS Lambda, a serverless computing platform that has changed the way developers around the world build applications. We examine how Lambda works under the hood, the capabilities it has, and how it is used. We also have a taste of AWS CDK and explore how this tool helps us to build and maintain our solution.',
  },
]

export const logos: LogoSection[] = [
  {
    href: 'https://uxpartner.nl',
    image_src: 'assets/uxpartner.svg',
    target: '_blank',
  },
  {
    href: 'https://sultansofjava.nl',
    image_src: 'assets/jnext.svg',
    target: '_blank',
  },
  {
    href: 'https://digitalmarketingpartner.nl',
    image_src: 'assets/dmp.svg',
    target: '_blank',
  },
  {
    href: 'https://eportaconsult.nl',
    image_src: 'assets/eporta.svg',
    target: '_blank',
  },
  {
    href: 'https://thehumannetwork.nl',
    image_src: 'assets/thn.svg',
    target: '_blank',
  },
]

export const navbarItems: NavbarItem[] = [
  { href: '#intro', scroll_to: '#intro', text: 'io10' },
  { href: '#sprekers', scroll_to: '#sprekers', text: 'sprekers' },
  { href: '#timetable', scroll_to: '#timetable', text: 'timetable' },
  { href: '#piccalilly', scroll_to: '#piccalilly', text: 'catering' },
  // { href: '#aanmelden', scroll_to: '#aanmelden', text: 'aanmelden' },
  { href: '#parking', scroll_to: '#parking', text: 'parkeren' },
]
