export interface Speaker {
  picture: string
  portrait: string
  title: string
  subject: string
  location: string
  time: string
  description: string
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
    picture: 'assets/speaker-bg3.jfif',
    portrait: 'assets/dennis.png',
    title: 'Dennis van der Stelt',
    subject: 'Hoe om te gaan met eventual consistency',
    location: 'Rio',
    time: '16:45 - 17:45',
    description:
      'Als developer en software architect willen we dat onze systemen performant en onderhoudbaar zijn. Veel van deze beslissingen zorgen voor eventual consistency, hoewel gebruikers onmiddellijke consistentie willen. Ze willen niet wachten op ‘eventual’ en hebben liever direct feedback van hun acties op het systeem. In deze sessie kijken we naar manieren, zowel in de gebruikersinterface als in de back-end, om direct feedback te geven aan eindgebruikers, ook al is de back-end nog niet volledig bijgewerkt, waardoor we ons systeem nog steedsbetrouwbaar en performant kunnen laten draaien.',
  },
  {
    picture: 'assets/speaker-bg4.jfif',
    portrait: 'assets/miranda.png',
    title: 'Miranda Beugelsdijk / Mirthe van Gaalen',
    subject: 'Hoe brengen wij mens en techniek samen?',
    location: 'Vancouver',
    time: '16:45 - 17:45',
    description:
      'Heb jij je altijd al afgevraagd waarom een chatbot je niet begrijpt? In deze interactieve sessie nemen wij je mee in de wereld van de virtuele assistent. We laten jullie zien hoe wij mens en techniek samenbrengen om te zorgen dat de bot jou wel begrijpt. Na deze sessie ken jij de beginselen van conversation design.',
  },
  {
    picture: 'assets/speaker-bg3.jfif',
    portrait: 'assets/swaana.jpg',
    title: 'Swaana Snorradottir',
    subject: 'The backend in the frontend',
    location: 'Peking',
    time: '16:45 - 17:45',
    description:
      'Frontend web-applicaties kunnen steeds meer complexiteit aan dankzij de moderne frontend frameworks en de steeds krachtigere hardware waarop de browsers draaien. Maar waar ligt eigenlijk de grens tussen frontend en backend? In dit praatje bespreken we de mogelijkheid om de backend door te trekken naar de frontend en wat dat kan betekenen voor de samenwerking tussen deze twee disciplines.',
  },
  {
    picture: 'assets/speaker-bg5.jfif',
    portrait: 'assets/jasperroel.png',
    title: 'Jasper Roel',
    subject:
      'Devops: Becoming the most valuable player (automation as a lifestyle)',
    location: 'Atlanta',
    time: '16:45 - 17:45',
    description:
      '“Production ready” betekent niet alleen maar “de code is af”. Als programmeur is de code nog maar een deel van je werk. Automatische deploys, monitoring & alerting rules en inzicht in wat er in je applicatie gebeurt zijn minstens zo belangrijk. In deze sessie kijken we samen naar wat er allemaal nog meer komt kijken om je applicatie niet alleen werkend, maar ook succesvol te maken. Via handige (maar weinig bekende) tools, tips & tricks om je te helpen zorg je ervoor dat jouw applicatie er met kop en schouders boven uit steekt.',
  },
  {
    picture: 'assets/speaker-bg3.jfif',
    portrait: 'assets/dennis.png',
    title: 'Dennis van der Stelt',
    subject: 'Microservices delen nooit data!',
    location: 'Rio',
    time: '18:15 - 19:15',
    description:
      "In deze sessie bespreken we waarom technologie niet helpt bij het oplossen van 'high coupling' in je systeem. We kijken op een andere manier naar microservices, een waarbij ze echt autonoom opereren en nooit data hoeven te delen.",
  },
  {
    picture: 'assets/speaker-bg8.jfif',
    portrait: 'assets/tim.png',
    title: 'Tim de Roode',
    subject:
      'Product Management in de praktijk: Design Thinking + Scrum + DevOps',
    location: 'Vancouver',
    time: '18:15 - 19:15',
    description:
      'Tim de Roode is een freelance Product Owner met ruime ervaring in het valideren en vertalen van klantbehoeftes en het structuren en optimaliseren van interne business- en IT-processen. De laatste jaren zijn werkvormen zoals Design Thinking, Scrum en DevOps enorm in populariteit gestegen. In deze sessie zullen we in gaan op de vraag hoe deze werkvormen zich tot elkaar verhouden en vooral hoe zij elkaar in de praktijk kunnen versterken.',
  },
  {
    picture: 'assets/speaker-bg6.jfif',
    portrait: 'assets/israel.png',
    title: 'Israel Roldan Leon',
    subject: 'Demystifying the Modern Front-end Stack',
    location: 'Peking',
    time: '18:15 - 19:15',
    description:
      'In this talk, I will provide an overview of the current state of Front-end development tools, how we got here and what this means for integration teams looking to pay closer attention to the increasing influence of Front-end development in Software Development teams.',
  },
  {
    picture: 'assets/speaker-bg7.jfif',
    portrait: 'assets/jasper.png',
    title: 'Jasper Jochem',
    subject: 'VR/AR: de toekomst van mens machine interactie',
    location: 'Atlanta',
    time: '18:15 - 19:15',
    description:
      'Jasper Jochem heeft een passie voor de toepassing van technologie. Hij werkt dagelijks aan innovatieve oplossingen, leuker nog is dat hij hier – met een aanstekelijk enthousiasme – alles over weet te vertellen. Bereid je voor op een reis waarin technologieën zoals artificial intelligence, augmented reality en virtual reality worden toegepast bij Defensie.',
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
  { href: '#intro', scroll_to: '#intro', text: 'io/10' },
  { href: '#sprekers', scroll_to: '#sprekers', text: 'sprekers' },
  { href: '#timetable', scroll_to: '#timetable', text: 'timetable' },
  { href: '#piccalilly', scroll_to: '#piccalilly', text: 'catering' },
  // { href: '#aanmelden', scroll_to: '#aanmelden', text: 'aanmelden' },
  { href: '#parking', scroll_to: '#parking', text: 'parkeren' },
]
