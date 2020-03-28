exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("artists")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("artists").insert([
                { id: 1, name: "Nora En Pure" },
                { id: 2, name: "Rufus Du Sol" },
                { id: 3, name: "Carl Cox" }
            ])
        })
}
