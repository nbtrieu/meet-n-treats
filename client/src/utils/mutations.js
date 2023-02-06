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
  mutation AddPost(
    $postText: String!
    $postAuthor: ID!
    $postImageURL: String!
  ) {
    addPost(
      postText: $postText
      postAuthor: $postAuthor
      postImageURL: $postImageURL
    ) {
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

export const CREATE_ITEM_TO_SELL = gql`
  mutation CreateItemToSell(
    $owner: ID!
    $title: String!
    $description: String!
    $price: String!
    $photo: String
    $sellBy: String
  ) {
    createItemToSell(
      owner: $owner
      title: $title
      description: $description
      price: $price
      photo: $photo
      sellBy: $sellBy
    ) {
      _id
    }
  }
`;

export const PURCHASE_ITEM = gql`
  mutation PurchaseItem($itemID: ID!) {
    purchaseItem(itemID: $itemID) {
      _id
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation RemoveItem($itemID: ID!) {
    removeItem(itemID: $itemID) {
      _id
    }
  }
`;
