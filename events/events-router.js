const express = require("express")

// const Events = require("./events-model")

router.get("/", (req, res) => {
    Events.find()
        .then(events => {
            res.json(events)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get events" })
        })
})
