import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
    }
  }
`;

export const QUERY_PLAYDATES = gql`
  query Playdates {
    playdates {
      _id
      pet1 {
        _id
        petOwner {
          name
          _id
          email
        }
        petName
        petAge
        petType
        petBreed
        petFavFood
        petFavActivities
        petBio
      }
      pet2 {
        _id
        petOwner {
          _id
          name
          email
        }
        petName
        petAge
        petType
        petBreed
        petFavFood
        petFavActivities
        petBio
      }
      location
      activity
      date
    }
  }
`
