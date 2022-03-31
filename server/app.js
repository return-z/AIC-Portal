const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser')

const connectDB = require('./db.js')

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json({ limit : "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true }));
app.use(cors());

// app.use('/', showHomePage);
app.use('/app', require('./routes/getRoutes'));
app.use('/app', require('./routes/postRoutes'))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
