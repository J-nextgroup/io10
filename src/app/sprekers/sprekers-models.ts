// Niet zeker wat als object logischer is om te noemen, spreker? Skill? Talk?
// Voorlopig gehouden bij Talk omdat het gewoon logischer is
export interface Talk {
    id: Number;
    afbeelding: string;
    titel: string;
    inhoudelijk_tekst: string;
    spreker: Spreker;
}

export interface Spreker {
    id: Number;
    naam: string;
    company: string;
    afbeelding: string;
}

// export enum SprekerNames {
//   gerald,
//   tim,
//   ruud,
// }
