// import { Sitemap } from './sitemap.js';
// const express = require("express");
import express from "express";
const app = express();
const PORT = 3000;

const API_ENDPOINT = 'https://webhook.site/3206db75-8555-415e-b541-b02f31692ce5';

app.use(express.static("public"));
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express!" });
});


app.get("/api/user/:id", (req, res) => {
  const userId = req.params.id
  const user = getUserData(userId);

  return res.json(user)
});

app.post('/api/webhook', async (req, res) => { // Route for your frontend to use
  console.log('req.body', req.body)
  try {
    const response = await fetch(API_ENDPOINT, { // Your webhook URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body), // Data from your frontend
    });

    // const data = await response.json(); // Or response.text() if not JSON
    // res.json(data); // Send the response back to your frontend
  } catch (error) {
    console.error("Error proxying request:", error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

//
function getUserData(id) {
  const users = {
    1: { id: 1, name: "Taro", age: 30, email: "taro@example.com" },
    2: { id: 2, name: "Hanako", age: 25, email: "hanako@example.com" },
    3: { id: 3, name: "Kenji", age: 40, email: "kenji@example.com" },
  };

  return users[id];
}