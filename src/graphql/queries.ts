import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
    query GetCharacters {
        allPeople {
            people {
                id
                name
            }
        }
    }
`

export const GET_CHARACTER_DETAILS = gql`
    query GetCharacterDetails($id: ID!) {
        person(id: $id) {
            id
            name
            birthYear
            gender
            height
            mass
            homeworld {
                id
                name
            }
            species {
                id
                name
            }
            filmConnection {
                films {
                    id
                    title
                    releaseDate
                }
            }
        }
    }
`
