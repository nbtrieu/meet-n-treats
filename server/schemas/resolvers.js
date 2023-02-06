const { AuthenticationError } = require("apollo-server-express");
const { User, Comment, Item, Post, Pet } = require("../models");
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
      return User.findOne({ email })
        .populate("pet")
        .populate("posts")
        .populate("comments");
      // TODO: would be cool to search by username instead of email, but username doesn't have to be unique... have to figure out how to require unique username
    },
    // Query to get all posts on the homepage:
    posts: async () => {
      return Post.find()
        .populate("comments")
        .populate("postAuthor")
        .sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId })
        .populate("comments")
        .populate("postAuthor");
    },
    posts_by_user: async (parent, { userID }) => {
      return Post.find({ postAuthor: userID }).sort({ createdAt: -1 });
    },
    items_to_sell: async (parent, { ownerID }) => {
      return Item.find({
        itemOwner: ownerID,
      }).sort({ createdAt: 1 });
    },
    items_to_buy: async (parent, { ownerID }) => {
      return Item.find({
        itemOwner: { $ne: ownerID },
        itemStatus: { $ne: "SOLD" },
      }).sort({ createdAt: -1 });
    },
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
    createItemToSell: async (
      parent,
      { owner, title, description, price, photo, sellBy }
    ) => {
      return await Item.create({
        itemOwner: owner,
        itemTitle: title,
        itemDescription: description,
        itemPrice: price,
        itemPhoto: photo,
        itemSellBy: sellBy,
        itemStatus: "SELLING",
      });
    },
    purchaseItem: async (parent, { itemID }) => {
      return await Item.findOneAndUpdate(
        { _id: itemID },
        { itemStatus: "SOLD" }
      );
    },
    removeItem: async (parent, { itemID }) => {
      return await Item.findOneAndDelete({ _id: itemID });
    },
  },
};

module.exports = resolvers;
