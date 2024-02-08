const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
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
    res.json({ message: 'Admin created successfully' })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    res.json({ message: "Welcome to courses"})
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;