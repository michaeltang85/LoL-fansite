const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const path = require('path');
const champions = require('./routes/api/champions');


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
  };
  //provides Express middleware to enable CORS
  app.use(cors(corsOptions));

// Bodyparser Middleware
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// DB Config
const db1 = process.env.mongoURI;

//get index.js
const db2 = require("./app/models");
const db = require('./models');
const Role = db.role;

// connect to mongo
mongoose
    .connect(db1,{ useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// connect to postgresql, if production then just .sync()
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync postgresql');
    initial();
});
//dev environment
function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
    Role.create({
      id: 2,
      name: "moderator"
    });
    Role.create({
      id: 3,
      name: "admin"
    });
  }

// use Routes
app.use('/api/champions', champions);

require('./routes/api/auth')(app);
require('./routes/api/users')(app);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


