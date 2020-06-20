const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT|| 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection was a wild success');
})

const blogEntriesRouter = require('./routes/blogEntries');

app.use('/blogEntries', blogEntriesRouter);

app.listen(port, () => {
  console.log(`Server is totally running on port: ${port}`);
});