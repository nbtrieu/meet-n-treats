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
  query posts {
    _id
    postText
    createdAt
    comments {
      commentAuthor
      commentText
      createdAt
    }
  }
`;