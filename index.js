import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render("index.ejs" ,{ joke: '' });
});

app.get("/getJoke", async (req,res) => {
    try {
    const result = await axios.get(" https://v2.jokeapi.dev/joke/Programming?type=single");
    const joke = result.data.joke;
    res.json({ joke });
    } catch(error) {
    res.json({ joke: "Error fetching joke." });
    };
});
app.listen(port,() => {
    console.log(`server listening to port ${port}`);
});