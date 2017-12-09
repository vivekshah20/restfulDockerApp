const express = require("express");
let app = express();
const fs = require('fs');


//let configRoutes = require("routes");

//configRoutes(app);


app.get("/:id", function (req, res) {
let donutID = req.params.id;
fs.readFile('./donut.json', "utf-8", (error, data) => {
        console.log(data);
        if (error) throw error;
        obj = JSON.parse(data);
for  (i = 0; i < obj.length; i++)
 { 
    if(obj[i].id==donutID)
    {
        res.json(obj[i]);
    }
}
});
});

app.get("/", function (req, res) {
    fs.readFile('./donut.json', "utf-8", (error, data) => {
        console.log(data);
        if (error) throw error;
        obj = JSON.parse(data);
         res.json(obj);
    });
});


app.listen(8080, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:8080");
});