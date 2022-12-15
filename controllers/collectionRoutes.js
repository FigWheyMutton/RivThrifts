// const sequelize = require('../config/connection');
// const { Post, User, Comment } = require('../models');
// const router = require('express').Router();





// router.get('/$5', (req, res) => {
//     Post.findAll({
//         attributes:[
//             'id',
//             'post_text',
//             'price',
//             [sequelize.literal(`(SELECT * FROM post WHERE price < 5`)]
//         ],
//     }).then(filterPost => {
//         console.log(filterPost)
//         res.render('collection', {posts: filterPost})
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
//   })

//   module.exports = router;