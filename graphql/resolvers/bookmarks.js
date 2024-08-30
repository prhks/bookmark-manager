const { AuthenticationError } = require("apollo-server");

const Bookmark = require("../../models/Bookmark");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Query: {
    async getBookmarks() {
      try {
        const bookmarks = await Bookmark.find().sort({ createdAt: -1 });
        return bookmarks;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getBookmark(_, { bookmarkId }) {
      try {
        const bookmark = await Bookmark.findById(bookmarkId);
        if (bookmark) {
          return bookmark;
        } else {
          throw new Error("Bookmark not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createBookmark(_, { url }, context) {
      const user = checkAuth(context);
      console.log(user);

      const newBookmark = new Bookmark({
        url,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const bookmark = await newBookmark.save();

      return bookmark;
    },
    async deleteBookmark(_, { bookmarkId }, context) {
      const user = checkAuth(context);

      try {
        const bookmark = await Bookmark.findById(bookmarkId);
        if (!bookmark) {
          throw new Error("Bookmark not found");
        }

        // Check if the bookmark has a username field
        if (!bookmark.username) {
          throw new Error("Bookmark is missing the username field");
        }

        // Compare user.username with bookmark.username
        if (user.username === bookmark.username) {
          await bookmark.deleteOne({ _id: bookmarkId });
          return "Bookmark deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
