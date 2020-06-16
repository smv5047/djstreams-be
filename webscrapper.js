const Apify = require("Apify")

const ApifyAPI = process.env.APIFY_API_TOKEN

Apify.client.setOptions({ token: ApifyAPI })

console.log(ApifyAPI)
async function run() {
    const twitterExtract = await Apify.call("mtrunkat/twitter", {})
    return twitterExtract
}

console.log("Actor finished, here is the output:")
run()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
console.dir(run.output)
