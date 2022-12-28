import express from "express";
import { MockRoutes } from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";

const app=express();

const corsOptions={
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT"]
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({extended:false }))
app.use(bodyParser.json())

app.use("/api",MockRoutes)

const port=4000;
app.listen(port,function(){
    console.log(`This server is runing on http://localhost:${port}`)
})
