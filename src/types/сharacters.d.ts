export interface Character {
    id: string
    name: string
}

interface Species {
    id: string
    name: string
}

interface HomeWorld {
    id: string
    name: string
    diameter: string
    orbitalPeriod: number
    population: number
    terrains: string[]
    climates: string[]
}

interface Film {
    id: string
    title: string
    releaseDate: string
}

export interface CharacterDetailData {
    person: Character & {
        birthYear: string
        gender: string
        height: number
        mass: string
        eyeColor: string
        skinColor: string
        homeworld: HomeWorld
        species: Species | null
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
