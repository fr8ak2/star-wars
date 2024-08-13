export interface Character {
    id: string
    name: string
}

export interface Film {
    id: string
    title: string
    releaseDate: string
}

export interface CharacterDetailData {
    person: Character & {
        birthYear: string
        gender: string
        height: string
        mass: string
        homeworld: Character
        species: Character | null
        filmConnection: {
            films: Film[]
        }
    }
}

export interface CharactersData {
    allPeople: {
        people: Character[]
    }
}
