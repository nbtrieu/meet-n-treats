import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!, $petName: String!, $petType: String!, $petAge: Int!, $petBreed: String, $petFavFood: String, $petFavActivities: String, $petBio: String) {
    register(name: $name, email: $email, password: $password, pet: {
      petName: $petName, petType: $petType, petAge: $petAge, petBreed: $petBreed, petFavFood: $petFavFood, petFavActivities: $petFavActivities, petBio: $petBio}) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_PLAYDATE = gql`
  mutation CreatePlayDate($pet1: String!, $pet2: String!, $location: String!, $activity: String!, $date: String!) {
    createPlayDate(data: {
      pet1: $pet1,
      pet2: $pet2,
      location: $location,
      activity: $activity,
      date: $date
    }) {
      _id
      pet1
      pet2
      location
      activity
      date
    }
  }
`;
// QUESTION: Do I need to put commentAuthor?
export const ADD_POST = gql`
   mutation AddPost($postText: String!, $postAuthor: ID!, $postImageURL: String!) {
     addPost(postText: $postText, postAuthor: $postAuthor, postImageURL: $postImageURL) {
      _id
      postImageURL
      postText
     }
    }
`;

export const REMOVE_POST = gql`
  mutation RemovePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;
