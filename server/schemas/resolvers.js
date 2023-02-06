const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Pet } = require("../models");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Query to get user info on profile page:
    user: async (parent, { _id }) => {
      return User.findOne({ _id }).populate('pet').populate('posts');
    // TODO: would be cool to search by username instead of email, but username doesn't have to be unique... have to figure out how to require unique username
    },
    // Query to get all posts on the homepage:
    posts: async () => {
      return Post.find().populate('comments').populate('postAuthor').sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId }).populate('comments').populate('postAuthor');
    },
    playdates: async (parent,args) => {
      return Playdate.find({}).populate('pet1').populate('pet2');
    }
  },
  Mutation: {
    register: async (parent, { name, email, password}) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addPet: async (parent, { petOwner, petName, petAge, 
      petType, petBreed, petFavFood, petFavActivities, petBio }) => {
      const pet = await Pet.create({ petOwner, petName, petAge, 
        petType, petBreed, petFavFood, petFavActivities, petBio });
      
      await User.findOneAndUpdate(
        { _id: petOwner },
        { $addToSet: { pet: pet._id } }
      );

      return pet;
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
    addPost: async (parent, { postAuthor, postText, postImageURL }) => {
      const post = await Post.create({ postAuthor, postText, postImageURL });

      await User.findOneAndUpdate(
        { _id: postAuthor },
        { $addToSet: { posts: post._id } }
      );

      return post;
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
    addPlaydate: async (parent, { pet1, pet2, location, activity, date }) => {
      const playdate = await Playdate.create({pet1, pet2, location, activity, date});

      await Pet.findOneAndUpdate(
        { _id: pet1 },
        { $push: { playdates: playdate._id}}
      );

      await Pet.findByIdAndUpdate(
        { _id: pet2 },
        { $push: {playdates: playdate._id}}
      );
      
    }
    addComment: async (parent, { postId, commentText, commentAuthor }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  },
};

module.exports = resolvers;
