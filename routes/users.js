import express from "express";
import { uuid } from 'uuidv4';


const router = express.Router();

let users = [];

router.get("/", (req, res) => {
    
    res.send(users)

});


router.post("/", (req, res) => {
    // const userId = uuid();
    // const userWithId = { ...user, id: userId }

    const user = req.body;
    users.push({ ...user, id: uuid() });
    res.send(`user with the name ${user.firstName} added to the database`);
})


router.get("/:id", (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser);
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);

    res.send(`user with the ${id} deleted from the database`)
});

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;

    if (firstName) {
        user.firstName = firstName;
    }

    if (lastName) {
        user.lastName = lastName;
    }

    if (age) {
        user.age = age;
    }

    const updatedUser = users.find((user) => user.id === id );
})

export default router;