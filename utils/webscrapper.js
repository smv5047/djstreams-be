const Apify = require("Apify")
const dotenv = require("dotenv").config()

const apifyToken = process.env.APIFY_API_TOKEN

Apify.client.setOptions({ token: apifyToken })

async function run() {
    await Apify.call("mtrunkat/twitter", {})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    console.log(twitterResults)
    return twitterResults
}

console.log("Actor finished, here is the output:")
run()
// console.dir(run.output)
