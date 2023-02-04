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

export const QUERY_USER = gql`
  query user {
    user {
      _id
      name
      email
      pet
      posts {
        _id
        postText
        createdAt
        comments {
          commentAuthor
          commentText
          createdAt
        }
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query Posts {
    posts {
      _id
      postAuthor {
        name
        _id
      }
      postText
      createdAt
      comments {
        _id
        commentAuthor {
          _id
          name
        }
        commentText
        createdAt
      }
      postImageURL
    }
  }
`;
