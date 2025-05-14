"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("node:path");

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const HOST = process.env?.HOST || "127.0.0.1";
const PORT = process.env?.PORT || 8000;

app.set("query parser", "extended");
/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

// Cors:
const corsOptions = {
  origin: process.env.CORS_ORIGIN.split(",") || "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Check Authentication:
app.use(require("./src/middlewares/authentication"));

// Run Logger:
app.use(require("./src/middlewares/logger"));

// Query Handler:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
// Routes:

// HomePath:
// app.all("/", (req, res) => {
//   res.send({
//     error: false,
//     message: "Welcome to Stock Management API",
//     documents: {
//       swagger: "/documents/swagger",
//       redoc: "/documents/redoc",
//       json: "/documents/json",
//     },
//     user: req.user,
//   });
// });

// Routes:
app.use("/api/v1", require("./src/routes"));

// Static Route:
app.use("/upload", express.static("./upload"));

// Client Static Files: //! Frontend için
const distPath = path.join(__dirname, "client", "dist");
app.use(express.static(distPath));

// Client Static Route:
app.all("/*splat", (req, res) => {
  if (req.path.startsWith("/api")) {
    res.status(404).send({
      error: true,
      message: `Route '${req.originalUrl}' is not found.`,
    });
  } else {
    res.sendFile(path.join(distPath, index.html));
  }
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
