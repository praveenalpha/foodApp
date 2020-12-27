const express = require('express');
const app = express();
const port = 3000;
const planRouter = require('./router/planRouter');
const userRouter = require('./router/userRouter');
const viewRouter = require('./router/viewRouter');
const path = require('path');
const cors = require('cors')


app.use(cors())
//view engine set
app.set("view engine", "pug");
//view path set
app.set("views",path.join(__dirname,"view"));

app.use(express.json());

app.use("/api/plan", planRouter);
app.use("/api/user",userRouter);
app.use("/",viewRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})