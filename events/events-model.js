const db = require("../data/db-config")

//READ
function find() {
    return db("events")
}

function findById(id) {
    return db("events")
        .where(id)
        .first()
}

//CREATE

const add = async event => {
    const [id] = await db("events").insert(event)
    console.log(id)
    return findById(id)
}

//UPDATE

function update(id, update) {
    return db("event")
        .where({ id })
        .update({ update })
        .returning("*")
}

//DELETE

function remove(id) {
    return db("events")
        .where({ id })
        .delete()
}

module.exports = {
    find,
    findById,
    add,
    remove,
    update
}
