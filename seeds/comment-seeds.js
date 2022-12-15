const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'bro bor bor',
        user_id: 1,
        post_id: 5,
        
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;