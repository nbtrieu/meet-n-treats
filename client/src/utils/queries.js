import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      name
      email
      password
      pet {
        _id
        petName
        petAge
        petType
        petBreed
        petFavFood
        petFavActivities
        petBio
      }
    }
  }
`;


export const QUERY_USER = gql`
  query User($id: ID!) {
    user(_id: $id) {
      _id
      name
      pet {
        _id
        petName
        petAge
        petType
        petBreed
        petFavFood
        petFavActivities
        petBio
      }
      posts {
        _id
        createdAt
        postAuthor {
          name
          _id
        }
        postImageURL
        postText
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query Posts {
    posts {
      _id
      postAuthor {
        _id
        name
        pet {
          _id
          petName
          petAge
          petType
          petBreed
          petFavFood
          petFavActivities
          petBio
        }
      }
      postText
      postImageURL
      createdAt
      timestamp
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query Post($postId: ID!) {
    post(postId: $postId) {
      _id
      postAuthor {
        _id
        name
      }
      postText
      postImageURL
      createdAt
      timestamp
      comments {
        _id
        commentAuthor {
          name
          _id
        }
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_PET = gql`
  query Pet($petId: String!) {
    pet(petId: $petId) {
      _id
      petName
      petAge
      petType
      petBreed
      petFavFood
      petFavActivities
      petBio
    }
  }
`;