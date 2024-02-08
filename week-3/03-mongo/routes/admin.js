const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const admin = new Admin({
        username, 
        password
    })

    await admin.save()
    res.json({ message: 'User created successfully' })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price
    const imageLink = req.body.imageLink

    const course = new Course({
        title,
        description,
        imageLink,
        price
    })

    await course.save()
    return res.json({
        message: "Course created successfully",
        courseId: course._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({})
    res.json({
        courses
    })
});

module.exports = router;