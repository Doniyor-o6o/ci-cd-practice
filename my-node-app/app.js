const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// JSON body'ni o'qish
app.use(express.json());

// Statik fayllar (CSS, JS, rasmlar)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});