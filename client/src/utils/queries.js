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
        timestamp
        comments {
          commentAuthor
          commentText
          createdAt
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_USER = gql`
  query posts_by_user($userID: ID) {
    posts_by_user(userID: $userID) {
      _id
      postAuthor {
        name
        _id
      }
      postText
      createdAt
      postImageURL
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
      timestamp
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

export const QUERY_ITEMS_TO_SELL = gql`
  query items_to_sell($ownerID: ID!) {
    items_to_sell(ownerID: $ownerID) {
      _id
      itemTitle
      itemPhoto
      itemDescription
      itemPrice
      itemStatus
    }
  }
`;

export const QUERY_ITEMS_TO_BUY = gql`
  query items_to_buy($ownerID: ID!) {
    items_to_buy(ownerID: $ownerID) {
      _id
      itemTitle
      itemPhoto
      itemDescription
      itemPrice
      itemOwner {
        name
      }
    }
  }
`;
