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
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('pet').populate('posts').populate('comments');
    },
    playdates: async (parent, args) => {
      return Playdate.find({}).populate('pet1').populate('pet2');
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
  },
};

module.exports = resolvers;
