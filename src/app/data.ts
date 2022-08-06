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
    title: 'Michael Schifferling / Erwin Bell',
    subject: 'Game development',
    location: 'Rio',
    time: '',
    description:
      'Als developer en software architect willen we dat onze systemen performant en onderhoudbaar zijn. Veel van deze beslissingen zorgen voor eventual consistency, hoewel gebruikers onmiddellijke consistentie willen. Ze willen niet wachten op ‘eventual’ en hebben liever direct feedback van hun acties op het systeem. In deze sessie kijken we naar manieren, zowel in de gebruikersinterface als in de back-end, om direct feedback te geven aan eindgebruikers, ook al is de back-end nog niet volledig bijgewerkt, waardoor we ons systeem nog steedsbetrouwbaar en performant kunnen laten draaien.',
  },
  {
    picture: 'assets/alberga_consultancy.jfif',
    portrait: 'assets/julia_alberga.png',
    title: 'Julia Alberga',
    subject: 'UX binnen de overheid',
    location: 'Vancouver',
    time: '',
    description:
      'Julia Alberga is expert in klantbeleving middels Design Thinking technieken. Als UX consultant en onderzoeker helpt zij bedrijven om onderzoek te doen naar de behoeftes van de gebruiker en deze vervolgens te vertalen naar verbeterde diensten en producten. Dit doet zij door de gebruiker actief mee te laten ontwerpen in het design proces middels co-creatie tools. Haar technische achtergrond in Delft zorgt er bovendien voor dat zij het ontwerpproces zelf beheerst en de verbeteringen kan overbrengen aan developers en ontwerpers. Door bedrijven te helpen met het intergeren van deze technieken in hun dagelijkse werkzaamheden, hoopt ze dat de Design Thinking denkwijze zich als een olievlek verspreid en iedereen als motto heeft om de gebruiker centraal te stellen.',
  },
  {
    picture: 'assets/speaker-bg3.jfif',
    portrait: 'assets/swaana.jpg',
    title: 'Swaana Snorradottir',
    subject: 'Front-end development',
    location: 'Peking',
    time: '',
    description:
      'Frontend web-applicaties kunnen steeds meer complexiteit aan dankzij de moderne frontend frameworks en de steeds krachtigere hardware waarop de browsers draaien. Maar waar ligt eigenlijk de grens tussen frontend en backend? In dit praatje bespreken we de mogelijkheid om de backend door te trekken naar de frontend en wat dat kan betekenen voor de samenwerking tussen deze twee disciplines.',
  },
  {
    picture: 'assets/speaker-bg5.jfif',
    portrait: 'assets/jasperroel.png',
    title: 'Bjorn van der Beek',
    subject: 'Azure en .Net',
    location: 'Atlanta',
    time: '',
    description:
      '“Production ready” betekent niet alleen maar “de code is af”. Als programmeur is de code nog maar een deel van je werk. Automatische deploys, monitoring & alerting rules en inzicht in wat er in je applicatie gebeurt zijn minstens zo belangrijk. In deze sessie kijken we samen naar wat er allemaal nog meer komt kijken om je applicatie niet alleen werkend, maar ook succesvol te maken. Via handige (maar weinig bekende) tools, tips & tricks om je te helpen zorg je ervoor dat jouw applicatie er met kop en schouders boven uit steekt.',
  },
  {
    picture: 'assets/logo.png',
    portrait: 'assets/logo.png',
    title: 'TO BE ANNOUNCED',
    subject: '',
    location: '',
    time: '',
    description: '',
  },
  {
    picture: 'assets/logo.png',
    portrait: 'assets/logo.png',
    title: 'TO BE ANNOUNCED',
    subject: '',
    location: '',
    time: '',
    description: '',
  },
  {
    picture: 'assets/logo.png',
    portrait: 'assets/logo.png',
    title: 'TO BE ANNOUNCED',
    subject: '',
    location: '',
    time: '',
    description: '',
  },
  {
    picture: 'assets/logo.png',
    portrait: 'assets/logo.png',
    title: 'TO BE ANNOUNCED',
    subject: '',
    location: '',
    time: '',
    description: '',
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
