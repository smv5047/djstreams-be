const express = require("express")

const router = express.Router()
const events = require("./events-model")

//CREATE

router.post("/", async (req, res, next) => {
    try {
        const event = await events.add(req.body)
        res.status(201).json(event)
    } catch (err) {
        next(err)
    }
})

//READ

router.get("/", (req, res) => {
    events
        .find()
        .then(event => {
            res.json(event)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get events" })
        })
})

router.get("/:id", (req, res) => {
    const { id } = req.params

    events
        .findById(id)
        .then(event => {
            res.json(event)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get events" })
        })
})

//Update

router.put("/:id", (req, res) => {
    const { id } = req.params

    events
        .update(id)
        .then(event => {
            res.json(event)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get events" })
        })
})

//DELETE

router.delete("/:id", (req, res) => {
    const { id } = req.params

    events
        .delete(id)
        .then(event => {
            res.json(event)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get events" })
        })
})

module.exports = router
