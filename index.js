import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config({
    path: "./.env"
})
const app = express();

app.use(cors({
    origin :  "*"
}))



app.get("/", (req, res) => {
    res.send("basic node js app ")
})
const jokes = [
    { id: 1, title: "Skeleton Joke", content: "Why don't skeletons fight each other? They don't have the guts." },
    { id: 2, title: "Spaghetti Joke", content: "What do you call fake spaghetti? An impasta." },
    { id: 3, title: "Math Book Joke", content: "Why did the math book look sad? It had too many problems." },
    { id: 4, title: "Eggs Joke", content: "Why don't eggs tell jokes? They might crack up." },
    { id: 5, title: "Scarecrow Joke", content: "Why did the scarecrow win an award? Because he was outstanding in his field." }
];

app.get("/api/jokes", (_, res) => {
    res.send(jokes)
})


app.listen(process.env.PORT, () => {
    console.log(`port is listne on this port  http://localhost:${process.env.port}`, process.env.PORT || 9090)
})