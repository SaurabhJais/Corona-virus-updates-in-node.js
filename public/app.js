const express = require("express")
const router = express.Router()
const axios = require("axios")
const URL = "https://corona.lmao.ninja/v2"



router.get("/", (req, res) => {

    let urls = [
        URL + "/countries",  // get all country data
        URL + "/all?yesterday=false",  // get global data
        URL + "/countries?yesterday=false&sort=cases" // 
    ]


    const promise1 = axios.get(urls[0]).then((response) => response.data).catch(err => res.send(err))
    const promise2 = axios.get(urls[1]).then((response) => response.data).catch(err => res.send(err))
    const promise3 = axios.get(urls[2]).then((response) => response.data).catch(err => res.send(err))


    Promise.all([promise1, promise2, promise3]).then(
        (val) => {
            res.render("home", {
                countries: val[0],
                global: val[1],
                sortedData: val[2]
            })
        }
    ).catch(
        (err) => {
            throw err
        }
    )

}
)


router.get("/:id", (req, res) => {
    const x = () => {
        new Promise(
            (resolve, reject) => {
                axios.get(`https://corona.lmao.ninja/v2/countries/${req.params.id}?yesterday=false&strict=true`)
                    .then((response) => {
                        console.log(response.data)
                        res.render("country", {
                            data : response.data
                        })
                    })
            }
        ).catch((err) => {
            console.log("You got an error")
        })
    }
    x()
}
)


module.exports = router;