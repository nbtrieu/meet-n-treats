const { AuthenticationError } = require("apollo-server-express");
const { User, Comment, Post, Pet, Playdate} = require("../models");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Query to search user by email:
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('pet').populate('posts').populate('comments');
    // TODO: would be cool to search by username instead of email, but username doesn't have to be unique... have to figure out how to require unique username
    },
    // Query to get all posts on the homepage:
    posts: async () => {
      return Post.find().populate('comments').populate('postAuthor').sort({ createdAt: -1 });
    },
<<<<<<< HEAD
    playdates: async (parent, args) => {
      return Playdate.find({}).populate('pet1').populate('pet2');
=======
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId }).populate('comments').populate('postAuthor');
>>>>>>> 15143b058259de7732f30b27af24272883581756
    }
  },
  Mutation: {
    register: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    addPlaydate: async (parent, { pet1, pet2, location, activity, date }) => {
      const playdate = await Playdate.create({pet1, pet2, location, activity, date});
      
      await Pet.findOneAndUpdate(
        { _id: pet1 },
        { $push: { playdates: playdate._id}}
      );

      await Pet.findOneAndUpdate(
        { _id: pet2 },
        { $push: { playdates: playdate._id}}
      );

      return playdate;
    },
    addPost: async (parent, { postAuthor, postText, postImageURL }) => {
      const post = await Post.create({ postAuthor, postText, postImageURL });

      await User.findOneAndUpdate(
        { name: postAuthor },
        { $addToSet: { posts: post._id } }
      );

      return post;
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
  },
};

module.exports = resolvers;
