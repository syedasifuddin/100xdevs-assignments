const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db')
const jwt = require('jsonwebtoken')

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    const user = new User({
        username, 
        password
    })

    await user.save()
    res.json({ message: 'User created successfully'})
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const user = await User.find({username, password})

    if (user) {
        const token = jwt.sign({
            username
        }, 'secret');

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
    }
);

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({})

    res.json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;

    await User.updateOne({
        username: req.username
    }, {
        $push: {
            purchasedCourses: courseId
        }
    })

    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    });

    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })
    res.json({
        courses
    })
});

module.exports = router