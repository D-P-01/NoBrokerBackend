// controllers/postController.js
const Post = require('../models/Post');
const User = require('../models/User');

const createPost = async (req, res) => {
    const {FlatNo, address, city, state, pincode, email, mobileNo, bedrooms, bathrooms, landmark, roomType, userId, price } = req.body;
    console.log(req.body);
    

    try {
        const seller = await User.findById(userId);
        // console.log(seller)
        if (!seller || seller.userType !== 'seller') {
            return res.status(403).json({ message: 'Only sellers can create posts' });
        }

        const newPost = new Post({
            FlatNo,
            address,
            city, state, pincode,
            email,
            mobileNo,
            bedrooms,
            bathrooms,
            landmark,
            roomType,
            sellerId:userId,
            price
        });

        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Server error' });
    }
};

const getPosts = async (req, res) =>  {
    try {
      const { page = 1, limit = 10 } = req.query;
  
      const posts = await Post.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
      const count = await Post.countDocuments();
  
      res.json({
        posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updatePost = async (req, res) => {
    const { FlatNo, address, city, state, pincode, email, mobileNo, bedrooms, bathrooms, landmark, roomType,price } = req.body;
    const postId = req.params.id;

    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.FlatNo = FlatNo || post.FlatNo;
        post.address = address || post.address;
        post.city = city || post.city;
        post.state = state || post.state;
        post.pincode = pincode || post.pincode;
        post.email = email || post.email;
        post.mobileNo = mobileNo || post.mobileNo;
        post.bedrooms = bedrooms || post.bedrooms;
        post.bathrooms = bathrooms || post.bathrooms;
        post.landmark = landmark || post.landmark;
        post.roomType = roomType || post.roomType;
        post.price = price || post.price;

        await post.save();
        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const deletePost = async (req, res) => {
    const postId = req.params.id;
    console.log(postId);

    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        await Post.findByIdAndDelete(postId);
        res.status(200).json({ message: 'Post removed' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const getPostsByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const posts = await Post.find({ sellerId:userId });
        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found for this user' });
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
    getPostsByUserId
};
