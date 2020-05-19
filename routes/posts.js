const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//get all the posts

router.get('/',async (req,res)=> {
    try{
        const posts =await Post.find()
        res.json(posts)
    }catch(err){res.json({massage:err})}
});

//submit posts
router.post('/',async (req,res)=> {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try{
    const savedPost = await post.save()
    res.json(savedPost)
    }catch(err){
        res.json({massage:err})
    }
})
//specific post
router.get('/:postId', async (req,res)=>{
    try{const post = await Post.findById(req.params.postId)
    res.send(post)
}catch(err){res.json({massage:err})}
})
//update
router.patch('/:postId', async (req,res)=>{
    try{
        const update = await Post.updateOne({_id:req.params.postId}, 
        {$set: {title: req.body.title,description:req.body.description}})
    res.json(update)
    }catch(err){res.json({massage:err})}
})
//delete post
router.delete('/:postId',async (req,res)=>{
    try{
    const remove = await Post.remove({_id:req.params.postId})
    res.json(remove)
}catch(err){res.json({massage:err})}
})

module.exports = router