const User = require('./user');
const Post = require('./post');
// const Vote = require('./vote');
// const Comment = require('./comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Post };