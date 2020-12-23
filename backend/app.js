const express = require('express');
const app = express();
const port = 3000;
const planRouter = require('./router/planRouter');




app.use(express.json());
app.use("/api/plan", planRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})