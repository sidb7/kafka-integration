import { kafka } from "./client.js";
import readline from "readline"

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
let count = 0
async function init() {
    const producer = kafka.producer()
    await producer.connect()
    console.log("PRODUCER CONNECTED")
    // rl.setPrompt('> ')
    // rl.prompt()
   
    
    // rl.on("line", async function (line){
    //     console.log(line,"LINSKLNKFN")
    //     const [riderName,location,ID] = line.split(" ")
    //     await producer.send(
    //         {
    //             topic: "rider-updates",
    //             messages: [
    //                 {
    //                     partition:parseInt(ID),
    //                     key: "location-update",
    //                     value: JSON.stringify({ name: riderName,loc: location })
    //                 }]
    //         }
    
    //     )

        
    // }).on('close',async ()=>{ await producer.disconnect()})
   
    await producer.send(
        {
            topic:"rider-updates",
            messages:[
                {
                    partition:1,
                    key:"location-updates",
                    value: JSON.stringify({name:`name ${count}`,location:"NORTH"})                }
            ]
        }
    )
    count++;
    await producer.disconnect()
}

setInterval(() => {
    init()
}, 3000);
