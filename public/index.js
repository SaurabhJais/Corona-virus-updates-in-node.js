const express = require("express")
const app = express()
const main = require("./app")
const bodyParser = require("body-parser")
const axios = require("axios")



app.set("view engine", "pug")
app.set("/views", "views")

app.use(express.static("views"))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())


app.get("/" , (req, res)=>{
    res.send("Welcome Homepage")
 })

 app.get("/search", (req, res)=>{
     const x = () =>{
         new Promise(
             (resolve, reject)=>{
                 axios.get(`https://corona.lmao.ninja/v2/countries/${req.query.country}?yesterday=false&strict=true`)
                 .then((response)=>{
                    console.log(response.data)
                     res.render("country", {
                         data : response.data
                     })
                 }).catch(
                     (err)=>{
                         console.log(err)
                     }
                 )
             }
         )
     }
    x();
})



app.use("/data", main)

const port = process.env.port || 3000
app.listen(port)