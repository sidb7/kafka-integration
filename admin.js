import {kafka} from "./client.js"


async function init(params) {
    const admin = kafka.admin()
    admin.connect()
    console.log("admin Connected")

    console.log("creating topics")

    await admin.createTopics({
        topics:[{
            topic:"rider-updates",
            numPartitions:2
        }]
    })

    console.log("TOPIC CREATED")
    await admin.disconnect()
}


init()