const router = require("express").Router();
const User = require("../models/User");

// CREATE User
router.post("/", async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE User
router.put("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                    
                );
                res.status(200).json(updatedUser);
            } catch (err) {
                res.status(500).json(err);
            }
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE User
router.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    try {
        const Users = await User.find();
        let user;
        Users.map((p)=>{
            if (p.usn === req.params.id) {
                user=p;
            }
        });
        if(user)
        {
            try{
                await user.delete();
                console.log("Deleted");
            }
            catch(err){
                console.log(err);
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET User
router.get("/:id", async (req, res) => {
    try {
        const User = await User.findById(req.params.id);
        res.status(200).json(User);
    } catch (err) {
        res.status(500).json(err)
    }
});

// GET ALL UserS
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let Users;
        Users = await User.find();
        res.status(200).json(Users);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;