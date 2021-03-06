exports.up = async function (knex) {
    await knex.schema.createTable("events", (table) => {
        table.increments("id").notNullable().unique()
        table.string("event_name").notNullable()
        table.string("event_start")
        table.string("event_end")
        table.integer("head_bops")
        table.string("event_platform")
        table.timestamp("created_at")
        table.string("description")
        table.string("tracklist")
        table.boolean("isVideo")
        table.string("link").notNullable()
        table.string("genre")
        table.boolean("isPromoted")
        //Remove in future release and use additional tables
        table.string("artist")
    })

    knex.schema.createTable("artists", (table) => {
        table.increments("id").notNullable().unique()
        table.string("name").notNullable().unique()
    })

    knex.schema.createTable("event_artists", (table) => {
        table
            .integer("event_id")
            .notNullable()
            .references("id")
            .inTable("events")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table
            .integer("artist_id")
            .notNullable()
            .references("id")
            .inTable("artists")
            .onUpdate("CASCADE")
            .onDELETE("CASCADE")
        table.primary(["event_id", "artist_id"])
    })
}

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("event_artists")
    await knex.schema.dropTableIfExists("artists")
    await knex.schema.dropTableIfExists("events")
}
