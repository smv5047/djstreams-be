exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("events")
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex("events").insert([
                {
                    id: 1,
                    event_name: "ReConnect",
                    head_bops: 3,
                    event_platform: "Youtube",
                    isVideo: true,
                    link: "https://www.youtube.com/watch?v=0zK2m8KSjjs"
                },
                {
                    id: 2,
                    event_name: "Test event",
                    head_bops: 1,
                    event_platform: "Twitch",
                    isVideo: false,
                    link: "www.google.com"
                },
                {
                    id: 3,
                    event_name: "Another Test Event",
                    head_bops: 0,
                    event_platform: "Other",
                    isVideo: false,
                    link: "www.espn.com"
                }
            ])
        })
}
