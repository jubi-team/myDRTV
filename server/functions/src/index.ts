import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

admin.initializeApp(functions.config().firebase);

const db = admin.firestore(); // Add this

const app = express();
const main = express();

main.use("/api", app);
main.use(bodyParser.json());
app.use(cors({ origin: true }));
main.use(cors({ origin: true }));

export const webApi = functions.https.onRequest(main);

app.get("/warmup", (request, response) => {
  response.send("Warming up friend.");
});

app.get("/movies", async (request, response) => {
  try {
    const moviesCollection = await db.collection("movies").get();
    let movies: any = [];
    moviesCollection.forEach(doc => {
      movies.push({
        id: doc.id,
        data: doc.data()
      });
    });

    response.json(movies);
    response.end();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/movies/:id", async (request, response) => {
  try {
    const movieID = request.params.id;

    if (!movieID) throw new Error("Movie ID is required");

    const movie = await db
      .collection("movies")
      .doc(movieID)
      .get();

    if (!movie.exists) {
      throw new Error("Movie doesnt exist.");
    }

    response.json({
      id: movie.id,
      data: movie.data()
    });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/user", async (request, response) => {
  try {
    const name = request.body.name;
    const email = request.body.email;
    const password = request.body.password;

    const data = {
      name,
      email,
      password
    };

    const userRef = await db.collection("users").add(data);
    const user = await userRef.get();

    response.json({
      id: userRef.id,
      data: user.data()
    });
    response.end();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/user", async (request, response) => {
  try {
    const usersCollection = await db.collection("users").get();

    let users: any = [];
    usersCollection.forEach(doc => {
      users.push({
        id: doc.id,
        data: doc.data()
      });
    });

    response.json(users);

    users.file;
    response.end();
  } catch (error) {
    response.status(500).send(error);
  }
});
