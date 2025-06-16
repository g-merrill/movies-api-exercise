var express = require("express")
var app = express()
const records = require("./records.js")

app.use(express.json())
app.set("json spaces", 2)

app.post("/movies", async (req, res) => {
  const newMovie = req.body
  const movieFromDb = records.createMovie(newMovie)
	res.json(movieFromDb)
})

app.get("/movies", async (req, res) => {
	const movies = await records.getMoviesList()
	res.json(movies)
})

app.get("/movies/:id", async (req, res) => {
	const movie = await records.getMovieById(req.params.id)
	res.json(movie)
})

app.put("/movies/:id", async (req, res) => {
  const updatedMovie = req.body
	const movieFromDb = await records.updateMovie(req.params.id, updatedMovie )
	res.json(movieFromDb)
})

app.get("/", async (req, res) => {
	res.send("Welcome to the movies API!")
})

app.listen(3000, () => {
	console.log("Server is listening on port 3000")
})
