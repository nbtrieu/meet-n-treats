const { gql } = require("apollo-server-express");
// *QUESTION: Do I need to put ! to the required fields?
const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    pet: Pet
    posts: [Post]
    comments: [Comment]
  }

  type Pet {
    _id: ID
    petOwner: User
    petName: String
    petAge: String
    petType: String
    petBreed: String
    petFavFood: String
    petFavActivities: String
    petBio: String
  }

  type Post {
    _id: ID
    postAuthor: User
    postText: String
    postImageURL: String
    createdAt: String
    timestamp: String
    comments: [Comment]
  }

  type Playdate {
    _id: ID
    pet1: Pet
    pet2: Pet
    location: String!
    activity: String!
    date: String!
  }

  type Comment {
    _id: ID
    commentAuthor: User
    commentText: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(email: String!): User
    posts: [Post]
    post(postId: ID!): Post
    playdates: [Playdate]
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPet(petOwner: ID!, petName: String!, petAge: String, petType: String!, petBreed: String, petFavFood: String, petFavActivities: String, petBio: String): Pet
    addPlaydate(pet1: String!, pet2: String!, location: String!, activity: String!, date: String!): Playdate
    addPost(postText: String!, postAuthor: ID!, postImageURL: String!): Post
    removePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;
