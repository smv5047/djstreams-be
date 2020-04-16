const db = require("../data/db-config")

//READ
function find() {
    // let eventArray = db("events")
    // eventArray.event_start.sort()
    // return eventArray
    return db("events")
}

const findById = (id) => {
    return db("events").where({ id }).first()
}

//CREATE

const add = async (djset) => {
    // db("events")
    //     .insert(event)
    //     .returning("*")

    const [ev] = await db("events").insert(djset).returning("*")
    return ev
}

//UPDATE

function update(id, update) {
    return db("events").where({ id }).update({ update }).returning("*")
}

//DELETE

function remove(id) {
    return db("events").where({ id }).delete()
}

module.exports = {
    find,
    findById,
    add,
    remove,
    update
}
