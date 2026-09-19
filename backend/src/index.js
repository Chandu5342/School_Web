const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
app.use(express.json());
const dbPath = path.join(__dirname, "movies.db");

let db = null;
const initializeDBAndServer = async () => {
 try {
       db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
        });
        app.listen(3000, () => {
            console.log("Server Running at http://localhost:3000/");
        });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();

app.get("/movies/:movieId/", async (request, response) => {
    const { movieId } = request.params;
    const getMovieQuery = `
    SELECT
      movie_id AS movieId,
      title,
      director_id AS directorId,
      rating,
      duration,
      release_date AS releaseDate
    FROM
      movie
    WHERE
      movie_id = ${movieId};`;
    const movie = await db.get(getMovieQuery);
    const formattedMovie = {
        movie_id: movie.movieId || movie.movie_id,
        title: movie.title,
        director_id: movie.directorId || movie.director_id,
        rating: movie.rating,
        duration: movie.duration,
        release_date: movie.releaseDate || movie.release_date
    };
    response.status(200).send(formattedMovie);
})