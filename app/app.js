global.mainPath = __dirname;
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authRouter = require('./routes/authRoute');
const microsoftAuthRouter = require('./routes/Microsoft/Auth/authRoute');
const calendarRouter = require('./routes/Microsoft/Calendar/calendarRoute');
const userRouter = require('./routes/Microsoft/User/userRoute');
const mailRouter = require('./routes/Microsoft/Mail/mailRoute');
const authMiddleware = require('./middlewares/auth');

//DB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`✔️  MongoDB connection is successful`))
  .catch((err) => console.log(`❌ MongoDB connection is failed\n${err}`));

//Express
const app = express();

//Configration
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/microsoft/*', authMiddleware);
app.use('/microsoft/auth', microsoftAuthRouter);
app.use('/microsoft/calendar', calendarRouter);
app.use('/microsoft/user', userRouter);
app.use('/microsoft/mail', mailRouter);

app.use((req, res) => {
  res.status(404).json();
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`🚀 The server running at port ${port}`));
