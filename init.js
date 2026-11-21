const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  
  {
    from: "Rahul",
    to: "Aman",
    msg: "Are you coming to the party tonight?",
    created_at: new Date(),
  },
  {
    from: "Priya",
    to: "Neha",
    msg: "Sure, I'll send them in a while",
    created_at: new Date(),
  },
  {
    from: "Riya",
    to: "Karan",
    msg: "Can you share the project files?",
    created_at: new Date(),
  },
  {
    from: "Arjun",
    to: "Sonia",
    msg: "Thanks for the reminder",
    created_at: new Date(),
  },

];

Chat.insertMany(allChats);
