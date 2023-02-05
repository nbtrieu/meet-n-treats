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
<<<<<<< HEAD
=======

export const REMOVE_POST = gql`
  mutation RemovePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;
>>>>>>> 15143b058259de7732f30b27af24272883581756
