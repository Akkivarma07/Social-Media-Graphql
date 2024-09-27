
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    name: String!
    bio: String
    avatar: Avatar
    followers: [User]
    following: [User]
    posts: [Post]
  }

  type Avatar {
    publicId: String
    url: String
  }

  type Post {
    id: ID!
    owner: User!
    caption: String!
    likes: [User]
    comments: [Comment]
    repost: Repost
    commentCount: Int!
    repostCount: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Comment {
    user: User!
    text: String!
    createdAt: String!
  }

  type Repost {
    user: User!
    caption: String
    createdAt: String!
  }

  input CreatePostInput {
    caption: String!
  }

  input LikePostInput {
    postId: ID!
  }

  input AddCommentInput {
    postId: ID!
    text: String!
  }

  input RepostPostInput {
    postId: ID!
    caption: String!
  }

  type Query {
    getUser(id: ID!): User
    getPost(id: ID!): Post
    # Add more queries if needed
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post
    likeAndUnlikePost(input: LikePostInput!): Post
    addComment(input: AddCommentInput!): Post
    repostPost(input: RepostPostInput!): Post
    # Add more mutations if needed
  }
`;

module.exports = typeDefs;
