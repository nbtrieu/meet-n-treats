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

export const ADD_COMMENT = gql`
  mutation AddComment($postId: ID!, $commentText: String!, $commentAuthor: String!) {
    addComment(postId: $postId, commentText: $commentText, commentAuthor: $commentAuthor) {
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
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
