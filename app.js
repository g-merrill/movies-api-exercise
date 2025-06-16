var express = require("express")
var app = express()
const records = require("./records.js")

app.use(express.json())
app.set("json spaces", 2)

app.post("/movies", async (req, res) => {
  const newMovie = req.body
  const addedMovie = records.createMovie(newMovie)
	res.json(addedMovie)
})

app.get("/movies", async (req, res) => {
	const movies = await records.getMoviesList()
	res.json(movies)
})

app.get("/movies/:id", async (req, res) => {
	const movie = await records.getMovieById(req.params.id)
	res.json(movie)
})

app.get("/", async (req, res) => {
	res.send("Welcome to the movies API!")
})

app.listen(3000, () => {
	console.log("Server is listening on port 3000")
})
