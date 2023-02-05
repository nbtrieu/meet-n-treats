import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
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

export const ADD_PET = gql`
  mutation AddPet($petOwner: ID!, $petName: String!, $petType: String!, $petAge: String, $petBreed: String, $petFavFood: String, $petFavActivities: String, $petBio: String) {
    addPet(petOwner: $petOwner, petName: $petName, petType: $petType, petAge: $petAge, petBreed: $petBreed, petFavFood: $petFavFood, petFavActivities: $petFavActivities, petBio: $petBio) {
      _id
      petOwner {
        _id
      }
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
