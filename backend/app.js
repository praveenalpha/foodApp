const express = require('express');
const app = express();
const port = 3000;
const planRouter = require('./router/planRouter');
const userRouter = require('./router/userRouter');



app.use(express.json());

app.use("/api/plan", planRouter);
app.use("/api/user",userRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})