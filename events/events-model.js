const db = require("../data/db-config")

//READ
function find() {
    return db("events")
}

const findById = id => {
    return db("events")
        .where({ id })
        .first()
}

//CREATE

const add = async event => {
    // db("events")
    //     .insert(event)
    //     .returning("*")

    const [id] = await db("events")
        .insert(event)
        .returning("*")
    console.log(id)
    return findById(id)
}

//UPDATE

function update(id, update) {
    return db("events")
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
