import express from 'express';
import apiRoutes from "./Routes/index";

let app = express();

app.use(express.json());

app.use("/api", apiRoutes);

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});