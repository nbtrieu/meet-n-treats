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
