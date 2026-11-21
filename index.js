// Import required packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");


// Import Chat model
const Chat = require("./models/chat.js");

// Set the directory where EJS view files are stored
app.set("views", path.join(__dirname, "views"));


// Set EJS as the template/view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// MongoDB Connection
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// INDEX ROUTE (READ)
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find();
        res.render("index.ejs", { chats });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching chats");
    }
});

// NEW ROUTE
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// CREATE ROUTE
app.post("/chats", async (req, res) => {
    try {
        let { from, to, msg } = req.body;

        let newChat = new Chat({
            from,
            to,
            msg
        });

        await newChat.save();

        console.log("Chat was saved");
        res.redirect("/chats");

    } catch (err) {
        console.log(err);
        res.status(500).send("Error saving chat");
    }
});

// EDIT ROUTE (SHOW EDIT FORM)
app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;

        let chat = await Chat.findById(id);

        if (!chat) {
            return res.status(404).send("Chat not found");
        }

        res.render("edit.ejs", { chat });

    } catch (err) {
        console.log(err);
        res.status(500).send("Error finding chat");
    }
});

// UPDATE ROUTE
app.put("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let { msg: newMsg } = req.body;

        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: newMsg },
            { runValidators: true, new: true }
        );

        if (!updatedChat) {
            return res.status(404).send("Chat not found");
        }

        console.log("Chat updated");
        res.redirect("/chats");

    } catch (err) {
        console.log(err);
        res.status(500).send("Error updating chat");
    }
});

// DELETE ROUTE
app.delete("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;

        let deletedChat = await Chat.findByIdAndDelete(id);

        if (!deletedChat) {
            return res.status(404).send("Chat not found");
        }

        console.log("Chat deleted");
        res.redirect("/chats");

    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting chat");
    }
});

// ROOT ROUTE
app.get("/", (req, res) => {
    res.send("Root is working");
});

// SERVER
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
