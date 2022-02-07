import express from 'express';
let app = express();
import fs from 'fs';
import path from 'path';

let __dirname = path.dirname(process.argv[1]);
app.use(express.static(path.join(__dirname, "/../frontend/")))


app.get("/", function (req, res) {
    fs.readFile(__dirname + "/../frontend/index.html", "utf8", function (err, data) {
        if (err) {
            console.log("Hata:", err);
        } else {
            res.send(data);
        }
    })
})


app.listen(80, () => {
    console.log("Server listening on port 80");
})