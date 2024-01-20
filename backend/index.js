const express =require('express');
const app=express();
const bodyParser =require('body-parser');
const cors =require('cors');
app.use(cors());
const userRouter =require('./routes/user');
app.use(bodyParser.json());

app.use('/user',userRouter);

app.listen(3000);
