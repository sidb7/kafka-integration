import { kafka } from "./client.js";

async function init(){
const consumer =  kafka.consumer({groupId:"USER_1"})
consumer.connect()
await consumer.subscribe({topics:["rider-updates"], fromBeginning: true})

await consumer.run({
    eachMessage: async({topic,partition,message,heartBeat,pause}) =>{
        console.log(`[${topic}]: PART: [${partition}]: message: `,message.value.toString())
    }
})
}

init()
