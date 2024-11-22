import { Kafka } from "kafkajs"



const kafka = new Kafka ({
    brokers:["localhost:9092"], // this can be hosted in somewhere like AWS instance or another server
    clientId:"MyAPP1"
}) 

export  {kafka}