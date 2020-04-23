const express = require("express"),
    app = express(),
    ejs = require("ejs"),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");

let notices = [{
        name: "Day Order",
        description: "The day order of today is 3"
    },
    {
        name: "Presentation",
        description: "The upcoming presentation will be held on the 20th of this month."
    }
];

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/notices", (req, res) => {
    res.render("notices", {
        //campgrounds: campgrounds
        notices: notices
    });
});

app.post("/notices", (req, res) => {
    //get data from form
    let name = req.body.name;
    let description = req.body.description;
    let newNotice = {
        name: name,
        description: description
    };
    notices.push(newNotice);
    //redirect back to campgrounds page
    res.redirect("/notices");
});

app.get("/notices/new", (req, res) => {
    res.render("new");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server has started!");
});