const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const champions = require('./routes/api/champions');



const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = process.env.mongoURI;


// connect to mongo
mongoose
    .connect(db,{ useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// use Routes
app.use('/api/champions', champions);

// Serve static assets if in production
if (proccess.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


